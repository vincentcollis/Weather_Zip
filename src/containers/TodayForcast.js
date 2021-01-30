import React from 'react'
import styled from 'styled-components'

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

export default function TodayForcast(props) {
    // destruct props
    let {feelsLike, temp, description, name} = props

    // console.log(temp)
    return (
        <StyledDiv>
            <Area>
                Area: {name}
            </Area><br/>
            <Conditions>
                Conditions: {description}
            </Conditions><br/>
            <CurrentTemp>
                Current Temperture: {temp}
            </CurrentTemp><br/>
            <FeelsLike>
                Feels Like: <Temp temp = {feelsLike} >{feelsLike}</Temp>
            </FeelsLike><br/>
        </StyledDiv>
    )
}
