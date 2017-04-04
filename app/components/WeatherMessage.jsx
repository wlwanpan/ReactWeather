var React = require('react');

// Param are ES6 destructuring syntax from props
// same as var {temp, location} = props
var WeatherMessage = ({temp, location, country}) => {
    // ES6 destructuring syntax
    return (
        <p className="text-center text-message">Temperature: {temp} &#8451; in {location}, {country}</p>
    );
};

module.exports = WeatherMessage;
