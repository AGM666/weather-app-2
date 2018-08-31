import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem/';
import transformForecast from './../services/transformForecast';
import './style.css';
/*
const days = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes'
]

const data = {
    temperature: 10,
    humidity:33,
    weatherstate:'normal',
    wind:'normal'
}
*/

const apikey = "e5cc7276a0fe480b47453a7116221839";
const url = "http://api.openweathermap.org/data/2.5/forecast";

class ForecastExtended extends Component {

    constructor(){
        super();
        this.state = { forecastData: null}
    }

    componentDidMount(){
        //fetch or axios
        this.updateCity(this.props.city);
    }

    componentWillReceiveProps(nextProps) {//se ejecuta cada vez que hay alguna actualizaciones de las propiedades 
        if (nextProps.city !== this.props.city){
            this.setState({forecastData: null}) //para acer que aparezca el indicador de carga.
            this.updateCity(nextProps.city)
        }
    }
    
    updateCity = city =>{
        const url_forecast = `${url}?q=${city}&appid=${apikey}`;

        fetch(url_forecast).then(
            (data) =>(data.json())
        ).then(
            (weather_data) =>{
                console.log(weather_data);
                const forecastData = transformForecast(weather_data);
                console.log(forecastData);
                this.setState({forecastData})            
            }
        );
    }
    
    renderForcastItemDays(forecastData) {
        //return <h1>Render Items</h1>;
        
       return forecastData.map( forecast => (
        <ForecastItem 
            key={`${forecast.weekDay}${forecast.hour}`}
            weekDay={forecast.weekDay} 
            hour={forecast.hour} 
            data={forecast.data}>
            
        </ForecastItem>));
        
      
    }

    renderProgress = () =>{
        return <h3>Cargando Pronostico Extendido...</h3>;
    }

    render() {
        //const city = this.props.city;
        const { city } = this.props; //destructuring
        const { forecastData } = this.state;
        return (
            <div className='forcast-title'>
                <h2>Pronóstico Extendido para {city}</h2>
                {forecastData ?
                    this.renderForcastItemDays(forecastData) :
                    this.renderProgress()}
            </div>);
    }

}
ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}
export default ForecastExtended;