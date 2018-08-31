import React, { Component} from 'react';
import PropTypes from 'prop-types';
import CircularProgress from 'material-ui/CircularProgress';
import Location from './Location';
import WeatherData from './WeatherData'
//import convert from 'convert-units';
import transformWeather from './../../services/transformWeather';

const apikey = "e5cc7276a0fe480b47453a7116221839";
const url = "http://api.openweathermap.org/data/2.5/weather";



class weatherLocation extends Component{

    constructor({ city }) {
        super();
        this.state = {
            city,
            data:null
        };
    }

    componentWillMount() {
        const { city } = this.state;
        const api_weather = `${url}?q=${city}&appid=${apikey}`;
        fetch(api_weather).then(data => {
            //console.log(data);
            return data.json();
        }).then(weather_data =>{
            const data = transformWeather(weather_data);
            this.setState({ data });
            //console.log(weather_data);
        });
    }

    render = () =>{
        const {onWeatherLocationClick} = this.props;
        const { city,data }= this.state;
        return (
    <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
        <Location city={city}></Location>
        {data ? <WeatherData data={data}></WeatherData>:
        <CircularProgress size={60} thickness={7} />}
        
    </div>
        )
    };
}
weatherLocation.propTypes = {
   city: PropTypes.string.isRequired,
   onWeatherLocationClick: PropTypes.func,
}
export default weatherLocation;