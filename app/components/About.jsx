var React = require('react');

// var About = React.createClass({
//     render: function () {
//         return (
//             <h3>About component</h3>
//         )
//     }
// });

// Stateless functional component
// Only defines the render function
// and does not store any states.

var About = (props) => {
    return (
        <div>
            <h1 className="text-center">About</h1>
            <p>This is a weather application project based on a React Web App course on Udemy</p>
            <p></p>
            <ul>
                <li>
                    Js framework used: <a href="https://facebook.github.io/react/" target="_blank">React</a>
                </li>
                <li>
                    CSS framework used:<a href="http://foundation.zurb.com/" target="_blank">Foundation</a>
                </li>
                <li>
                    API requested from:<a href="https://openweathermap.org/" target="_blank">OpenWeatherMap</a>
                </li>
            </ul>
        </div>
    )
};

module.exports = About;
