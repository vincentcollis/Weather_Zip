import React from 'react'
import styled from 'styled-components'

// styling
const StyledDiv = styled.div`
    /* grid-column: 2/2 ;
    grid-row : 3/3; */
    /* justify-self: center;
    align-self: center; */
`

export default function TodayForcast(props) {
    // destruct props
    let {feelsLike, temp, description, name} = props

    // console.log(temp)
    return (
        <StyledDiv>
            Area: {name}<br/>
            Conditions: {description}<br/>
            Current Temperture: {temp}<br/>
            Feels Like: {feelsLike}<br/>
        </StyledDiv>
    )
}
