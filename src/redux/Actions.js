export const FETCH_WEATHER_DATA_PENDING = 'FETCH_WEATHER_DATA_PENDING';
export const FETCH_WEATHER_DATA_SUCCESS = 'FETCH_WEATHER_DATA_SUCCESS';
export const FETCH_WEATHER_DATA_ERROR = 'FETCH_WEATHER_DATA_ERROR';

export function fetchWeatherDataPending(){
    return {
        type: FETCH_WEATHER_DATA_PENDING
    }
}

export function fetchWeatherDataSuccess(weatherData){
    return {
        type: FETCH_WEATHER_DATA_SUCCESS,
        weatherData: weatherData
    }
}

export function fetchWeatherDataError(error){
    return {
        type: FETCH_WEATHER_DATA_ERROR,
        error: error
    }
}
