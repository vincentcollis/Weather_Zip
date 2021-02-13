import { FETCH_WEATHER_DATA_PENDING, FETCH_WEATHER_DATA_SUCCESS, FETCH_WEATHER_DATA_ERROR } from '../Actions'

const initialState = {
    pending: false,
    weatherData: [],
    error: null
}

export function weatherReducer(state=initialState, action){
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

export const getWeatherData = state => state.weatherData
export const getWeatherDataPending = state => state.pending
export const getWeatherDataError = state => state.error