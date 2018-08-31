import React from  'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import PropTypes from 'prop-types';
import WeatherTemperature from './WeatherTemperature';
import WeatherLocation from './../index';
import TransformWeather from './../../../services/transformWeather'
import './style.css';
/*import {CLOUD,
    CLOUDY,
    DAYHAIL,
    SLEET,
    ECLIPSE,
}from './../../../constants/weather'
*/
const WeatherData = ({ data}) => {
    const { temperature, weatherstate, humidity, wind } = data;
    return(
    <div className='weatherDataCont'>
        <WeatherTemperature temperature={temperature} weatherstate={weatherstate}/>
        <WeatherExtraInfo humidity={humidity} wind={wind}/>    
    </div>
    );
};

WeatherData.propTypes = {
    data:PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherstate: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind:PropTypes.string.isRequired,
    }),
};

export default WeatherData;