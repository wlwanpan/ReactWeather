var React = require('react');
var velocity = require('velocity-animate');

var SvgRain = React.createClass ({

    getInitialState: function () {
        return {
            rainDropSize: ["1", "1.5"],
            rainDropBuffer: 10,
            dropValue: 80,
            spawnArea: {
                limitX: [13, 84],
                limitY: [15, 20]
            },
            animationID: null
        }
    },
    createRainDrop: function () {

        var getRandomInt = (min, max) => {return Math.floor(Math.random() * (max - min + 1)) + min;}
        var elipseSize = this.state.rainDropSize;
        var x = this.state.spawnArea.limitX;
        var y = this.state.spawnArea.limitY;

        return (
            <ellipse className="rain-drop" cx={getRandomInt(x[0], x[1])} cy={getRandomInt(y[0], y[1])} rx={elipseSize[0]} ry={elipseSize[1]}/>
        );

    },
    startRainLoop: function () {

        $(".rain-drop").each(function () {

            console.log($(this).attr('cy'));
        });

        //window.requestAnimationFrame(this.animateRain());
    },
    componentDidMount: function () {
        var delay = this.props.initDelay;
        var that = this;
        $(".rain-drop").each(function () {

            $(this).css('opacity', 0).delay(delay).velocity({
                translateY: that.state.dropValue,
            }, {
                duration: 1000,
                easing: "linear",
                begin: () => {$(this).css('opacity', 1);},
                complete: () => {$(this).css('opacity', 0);}
            })
            delay += 150;
        });
        //window.requestAnimationFrame(this.animateRain());
    },
    componentWillUnmount: function () {
    },
    render: function () {

        return (
            <g id="raindrop" fill="#034aed">
                {this.createRainDrop()}{this.createRainDrop()}{this.createRainDrop()}{this.createRainDrop()}
                {this.createRainDrop()}{this.createRainDrop()}{this.createRainDrop()}{this.createRainDrop()}
            </g>
        );
    }
});

module.exports = SvgRain;
