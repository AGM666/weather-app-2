import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';
import './style.css';


const LocationList = ({cities, onSelectedLocation}) =>{ //functional component
    const handleWeatherLocationClick = city =>{
        console.log("handleWeatherLocationClick");
        onSelectedLocation(city);
    };
    
    const strToComponent = (cities) => (
        cities.map((city) => 
        (
        <WeatherLocation 
        key={city} 
        city={city}
        onWeatherLocationClick = {()=> handleWeatherLocationClick(city)} />))
    );
   return <div className="locationList">
        {strToComponent(cities)}
    </div>
};

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func,
}

export default LocationList;