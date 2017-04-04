var React = require('react');
var SvgBody = require('SvgBody');
var SvgHead = require('SvgHead');
var SvgClouds = require('SvgClouds');

var SvgBox = React.createClass({
    getInitialState: function () {
        return {

        }
    },
    setWeatherAnimation: function (condition) {
        // console.log(condition);
        if (condition) {
            console.log(condition);

            if (condition === "Rain") {
                return (
                    <SvgClouds activateRain={true}/>
                );
            } else if (condition === "Clouds") {
                return (
                    <SvgClouds activateRain={false}/>
                );
            } else if (condition === "Snow") {

            } else if (condition === "Clear") {

            } else if (condition === "Drizzle") {

            } else {
                return null
            }
        }
    },
    render: function () {

        // old view box
        return (
            <div id="svg-box-container">
                <svg xmlns="http://www.w3.org/2000/svg" id="minion-box" viewBox="0 0 100 100" preserveAspectRatio="xMidYMax meet">
                    <g id="minion-wrapper" transform="scale(0.5) translate(70, 100)" strokeLinecap="round" strokeLinejoin="round" paintOrder="fill markers stroke">
                        <SvgBody/>
                        <SvgHead/>
                    </g>
                    {this.setWeatherAnimation(this.props.onWeatherCondition)}
                </svg>
            </div>
        )
    }
});

module.exports = SvgBox;
