import React from 'react'
import styled from 'styled-components'

import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';

import fetchWeatherDataAction from '../api/index';
import { getWeatherData, getWeatherDataPending, getWeatherDataError } from '../redux/reducers/weatherReducer'




// styling
const StyledDiv = styled.div`
    /* grid-column: 2/2 ;
    grid-row : 3/3; */
    /* justify-self: center;
    align-self: center; */
`

const Area = styled.span``
const Conditions = styled.span``
const CurrentTemp = styled.span``
const FeelsLike = styled.span``

const Temp = styled.span`
    color: ${props => props.temp < 60 ? "blue" : "black"};
`

function TodayForcast(props) {
    console.log(`todays forcast: ${props.weatherData}`)
    // destruct props
    // let {feelsLike, temp, description, name, weatherData} = props
    
    
    // console.log(temp)
    return (
        <StyledDiv>
            <Area>
                {/* Area: {name} */}
            </Area><br/>
            <Conditions>
                {/* Conditions: {description} */}
            </Conditions><br/>
            <CurrentTemp>
                {/* Current Temperture: {temp} */}
            </CurrentTemp><br/>
            <FeelsLike>
                {/* Feels Like: <Temp temp = {feelsLike} >{feelsLike}</Temp> */}
            </FeelsLike><br/>
        </StyledDiv>
    )
}

const mapStateToProps = (state) => ({
    error: getWeatherDataError(state),
    weatherData: getWeatherData(state),
    pending: getWeatherDataPending(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchWeatherData: fetchWeatherDataAction
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodayForcast);