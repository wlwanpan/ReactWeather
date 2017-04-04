var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');
var SvgBox = require('SvgBox');

var Weather = React.createClass({
    getInitialState: function () {
        return {
            isLoading: false,
        }
    },
    handleSearch: function (location) {

        this.setState({
            isLoading: true,
            errorMessage: undefined,
            location: undefined,
            country: undefined,
            temp: undefined
        });
        openWeatherMap.getTemp(location).then((RequestedJsn) => {
            //console.log(RequestedJsn.weather[0]);
            this.setState({
                isLoading: false,
                location: RequestedJsn.name,
                country: RequestedJsn.sys.country,
                temp: RequestedJsn.main.temp,
                WeatherCondition: RequestedJsn.weather[0].main
            });
        }, (e) => {
            this.setState({
                isLoading: false,
                errorMessage: e.message,
            });
        });
    },
    componentDidMount: function () {
        var location = this.props.location.query.location;

        if (location && location.length > 0) {
            this.handleSearch(location);
            window.location.hash = '#/';
        }
    },
    componentWillReceiveProps: function (newProps) {
        var location = newProps.location.query.location;

        if (location && location.length > 0) {
            this.handleSearch(location);
            window.location.hash = '#/';
        }
    },
    render: function () {
        var {isLoading, temp, location, country, errorMessage} = this.state;

        function renderMessage () {
            if (isLoading) {
                return <h3 className="text-center">Fetching Weather ...</h3>
            } else if (temp && location) {
                return <WeatherMessage temp={temp} location={location} country={country}/>
            } else {
                return (<p></p>);
            }
        }

        function renderError () {
            if (typeof errorMessage === 'string') {
                return (
                    <ErrorModal  message={errorMessage}/>
                )
            }
        }

        return (
            <div>
                <h1 className="text-center page-title">Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
                {renderError()}
                <SvgBox onWeatherCondition={this.state.WeatherCondition}/>

            </div>
        )
    }
});

module.exports = Weather;
