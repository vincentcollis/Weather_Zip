import fetchWeatherData from '../../api/index'

const initState = {
    weatherData: [
        //Dummy data
        {id:1, zip:'07666', description:'clear skys', temp: '28', feelsLikeid:'15'},
        {id:2,zip:'10034', description: 'Snowing', temp: '25', feelsLikeid:'14'},
        {id:3,zip:'90210', description: 'sunny', temp: '70', feelsLikeid:'Cambridge'},
    ]
}

const rootReducer = ( state = initState, action) =>{
    
    if(action.type === "FETCH_WEATHER"){

        let payload = fetchWeatherData(action.zip)
        console.log(payload)
        // console.log(data)
        // state.weatherData.push({
        //     id: state.weatherData.length + 1 ,
        //     zip: action.zip,
        //     description: payload.weather , 
        //     // temp:payload.main.temp,
        //     // feelsLikeid: payload.main.feels_like,
        //     name: payload.name
        // })
        // console.log(state.weatherData)

    }
    // console.log(action)

    if(action.type === "ADD_WEATHER_DATA"){
        console.log(action.payload)
    }


    return state;
}

export default rootReducer;
