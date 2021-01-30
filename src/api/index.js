const axios = require('axios');

const getWeatherData = async (arg) => {

    // retrieve data
    const payload = await axios.get('http://api.openweathermap.org/data/2.5/weather?zip=' + arg +'&units=imperial&appid=' + process.env.REACT_APP_WEATHER_API_KEY)
    
    return payload.data
}
  
export default getWeatherData

