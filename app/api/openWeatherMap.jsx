//var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=0898d88131ba6ae9d57e1a3d6bf84515&units=metric';

//0898d88131ba6ae9d57e1a3d6bf84515

module.exports = {
    getTemp: function(location) {

        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(requestUrl).then(function (res) {

            if (res.data.cod && res.data.message) {
                throw new Error(res.data.message);
            } else {
                return res.data.main.temp;
            }

        }, function (res) {

            throw new Error('Unable to fetch weather for that location');

        })
    }
}
