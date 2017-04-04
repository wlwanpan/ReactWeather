var React = require('react');

// Stateless functional component
// Only defines the render function
// and does not store any states.

var About = (props) => {
    return (
        <div>
            <h1 className="text-center page-title">About</h1>
            <p>This is a weather application project using the following:</p>
            <ul>
                <li>
                    Javascript framework: <a href="https://facebook.github.io/react/" target="_blank"> React</a>
                </li>
                <li>
                    Animation Library: <a href="http://velocityjs.org/" target="_blank"> Velocity</a>
                </li>
                <li>
                    CSS framework:<a href="http://foundation.zurb.com/" target="_blank"> Foundation</a>
                </li>
                <li>
                    API requested from:<a href="https://openweathermap.org/" target="_blank"> OpenWeatherMap</a>
                </li>
                <li>
                    Hosted on:<a href="https://dashboard.heroku.com/apps" target="_blank"> Heroku</a>
                </li>
            </ul>
        </div>
    )
};

module.exports = About;
