import { FETCH_WEATHER_DATA_PENDING, FETCH_WEATHER_DATA_SUCCESS, FETCH_WEATHER_DATA_ERROR } from '../Actions'

import initialState from '../initialState'

export default function weatherReducer(state=initialState, action){
    console.log("reducer working")
    switch (action.type) {
        case FETCH_WEATHER_DATA_PENDING:
            return{
                ...state,
                pending: true
            }
        case FETCH_WEATHER_DATA_SUCCESS:
            return{
                ...state,
                pending: false,
                weatherData: action.payload
            }
        case FETCH_WEATHER_DATA_ERROR:
            return{
                ...state,
                pending: false,
                error: action.error
            }
        default:
            return state
    }
}


export const getWeatherData = state =>{ 
    console.log(`weather reducer: ${state.weatherData}`)
    return state.weatherData 
}
export const getWeatherDataPending = state => state.pending
export const getWeatherDataError = state => state.error