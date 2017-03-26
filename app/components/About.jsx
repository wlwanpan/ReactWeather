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
        <h3>About component</h3>
    )
};

module.exports = About;
