var React = require('react');

// Param are ES6 destructuring syntax from props
// same as var {temp, location} = props
var WeatherMessage = ({temp, location}) => {
    // ES6 destructuring syntax
    return (
        <h3 className="text-center">It's {temp} &#8451; in {location}</h3>
    );
};

module.exports = WeatherMessage;
