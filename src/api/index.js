import {fetchWeatherDataPending, fetchWeatherDataSuccess, fetchWeatherDataError} from '../redux/Actions';

// const axios = require('axios');

function fetchWeatherData(arg){

    console.log(`API fetching weather data: ${arg}`)
    // retrieve data
    // const payload = await axios.get('http://api.openweathermap.org/data/2.5/weather?zip=' + arg +'&units=imperial&appid=' + process.env.REACT_APP_WEATHER_API_KEY)
    
    // retrieve data
    return (dispatch) => {
        dispatch(fetchWeatherDataPending())

        fetch('http://api.openweathermap.org/data/2.5/weather?zip=' + arg +'&units=imperial&appid=' + process.env.REACT_APP_WEATHER_API_KEY)
        .then(response => response.json())
        .then(response => {
            // console.log(response)
            if(response.error){
                throw(response.error)
            }
            dispatch(fetchWeatherDataSuccess(response));
            // console.log(response)
            return response
        })
        .catch(error => {
            dispatch(fetchWeatherDataError(error))
        })
    }
}
  
export default fetchWeatherData

