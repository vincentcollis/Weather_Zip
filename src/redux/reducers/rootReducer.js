// import fetchWeatherData from '../../api/index'

import { combineReducers } from 'redux'
import weatherReducer from './weatherReducer'


export default combineReducers({
    weatherReducer
})

// const rootReducer = ( state = initState, action) =>{
    
//     if(action.type === "FETCH_WEATHER"){

//         let payload = fetchWeatherData(action.zip)
        
//         return {
//             ...state,
//             data: action.payload
//         }

        
//         // console.log(payload)
//         // return payload
//         // console.log(data)
//         // state.weatherData.push({
//         //     id: state.weatherData.length + 1 ,
//         //     zip: action.zip,
//         //     description: payload.weather , 
//         //     // temp:payload.main.temp,
//         //     // feelsLikeid: payload.main.feels_like,
//         //     name: payload.name
//         // })
//         // console.log(state.weatherData)
//     }
//     console.log(payload)

//     if(action.type === "ADD_WEATHER_DATA"){
//         console.log(action.payload)
//     }


//     return state;
// }

