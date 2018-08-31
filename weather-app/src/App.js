import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { createStore } from 'redux';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';
import { setCity } from './actions';
import { store} from './store';
import './App.css';
import connect from '../node_modules/react-redux/lib/connect/connect';
import mapDispatchToProps from '../node_modules/react-redux/lib/connect/mapDispatchToProps';

const cities = [
  
  'New York,us',
  'Guadalajara Metropolitan Area,mx',
  'Mumbai,in',
  'Madrid,es',
  'Bogota,col',
  'Vancouver,ca',
  'Washington,us'
];

const mapDispatchToPropsActions = () => {};

const componetConnected = connect(null, mapDispatchToPropsActions)
class App extends Component {
constructor(){
  super();
  this.state = {city:null};
}

  //manejador de evento
  handleSelectionLocation = (city) => {
    this.setState({city:city});
    console.log(`handleSelectionLocation ${city}`);
    
    store.dispatch(setCity(city));
  }
  //
  render() {
    const { city } = this.state; //destructuring
    return (
      <MuiThemeProvider>
        <Grid>
          <Row>
            <Col xs={12}>
              <AppBar title="weather App"></AppBar>
            </Col>
        </Row>
          <Row>
            <Col xs={12} md={6}>
              <LocationList cities={cities}
                onSelectedLocation={this.handleSelectionLocation}></LocationList>
            </Col>
            <Col xs={12} md={6}>
              <Paper zDepth={4}>
                <div className = 'detail'>
                {
                  !city  ? 
                  //<h2>No se seleccionó la ciudad.</h2>
                  null:

                <ForecastExtended city={city}></ForecastExtended>
                }
                
                </div>
              </Paper>
            </Col>
          </Row>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default App;
