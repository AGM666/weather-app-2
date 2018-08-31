import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import './style.css'
import {CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
    THUNDER,
    DRIZZLE,
    DAYHAIL,
    SLEET,
    ECLIPSE,
    HOT
}from './../../../constants/weather'


const stateToIconName = weatherstate =>{
    switch (weatherstate) {
        case CLOUD:
            return "cloud";
        case CLOUDY:
            return "cloudy";
        case SUN:
            return "day-sunny";
        case RAIN:
            return "day-sleet-storm";
        case WINDY:
            return "windy";   
        case THUNDER:
            return "day-thunderstorm";
        case DRIZZLE:
            return "day-sprinkle";
        case DAYHAIL:
            return "day-hail";
        case SLEET:
            return "day-sleet-storm";
        case ECLIPSE:
            return "solar-eclipse";   
        case HOT:
            return "hot";
        case SNOW:
            return "snow";
        default: 
                return "night-alt-thunderstorm";
    }
};

const getWeatherIcon = (weatherstate) => { //sepueden omitir parentesis por ser solo un parametro
    return (<WeatherIcons className="wicon" name={stateToIconName(weatherstate)} size="4x"/>)
};

const WeatherTemperature = ({ temperature, weatherstate}) => (    
<div className="weatherTemperatureCont">
    {getWeatherIcon(weatherstate)}
    <span className="temperature">{`${temperature} `}</span>
    <span className="temperaturetype">C°</span>
</div>
);


WeatherTemperature.propTypes = {
    temperature:PropTypes.number.isRequired,
    weatherstate:PropTypes.string,
}
export default WeatherTemperature;