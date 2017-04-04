var React = require('react');
var velocity = require('velocity-animate');
var SvgRain = require('SvgRain');

var SvgClouds = React.createClass ({
    getInitialState: function () {
        return {
            selector: null,
            entryDuration: 1500,
            opacityTransition: [1, 0]
        }
    },
    componentDidMount: function () {

        var that = this;
        $("#cloud-left").velocity({
            translateZ: 0,
            opacity: that.state.opacityTransition,
            translateX: [0, -100],
        }, {
            duration: that.state.entryDuration,
        });
        $("#cloud-right").velocity({
            translateZ: 0,
            opacity: that.state.opacityTransition,
            translateX: [0, 100],
        }, {
            duration: that.state.entryDuration,
        });
    },
    componentWillUnmount: function () {
        $("#cloud-left").velocity("stop").velocity("reverse");
        $("#cloud-right").velocity("stop").velocity("reverse");
    },
    setupRain: function () {

        if (this.props.activateRain) {
            //$("#weather-clouds").fill("#ededed");
            return (
                <SvgRain initDelay={this.state.entryDuration}/>
            );
        }
    },
    render: function () {

        return (
            <g>
                {this.setupRain()}
                <g id="weather-clouds" fill="#ffffff" strokeWidth="1" stroke="#191919">
                    <path id="cloud-left" d="M20.23 18.9c-9 3.83-12.24-9.68-1.77-8.7.58-3.18 2.16-3.33 4-2.76C26-2.3 36.72.56 37.7 9.14c2.07-.02 3.1 1.1 4.06 2.3 5.35-.26 4.7 7.84.48 7.45-4.4 4.77-7.28 3.3-9.95 1-1.4.83-2.63 1.95-5.35.5-2.4 2.14-4.7 2.4-6.72-1.5z"/>
                    <path id="cloud-right" d="M51.5 19.87C41.14 23.1 37.98 9.1 50.02 9.92c.66-2.67 3.93-4.48 6.02-4 4.5-8.2 24.15-4.78 23.23 2.43 3.42-.83 5.43 2.47 5.23 4.08 5.12 2.9.7 9.55-3.52 7.32-5.06 4-7 2.72-10.05.78-3.27 2.03-5.28 1.25-7.1-1.04-2.03 2.87-9.78 3.97-12.33.37z"/>
                </g>
            </g>
        )
    }
});

module.exports = SvgClouds;
