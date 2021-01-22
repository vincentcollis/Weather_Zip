import React from 'react'
import styled from 'styled-components'

export default function TodayForcast(props) {
    // destruct props
    let {feelsLike, temp, description} = props

    // styling
    const StyledDiv = styled.div`
        grid-column: 4/8 ;
        grid-row : 3/6;
    `

    console.log(temp)
    return (
        <StyledDiv>
            {description}<br/>
            Current Temperture:  {temp}<br/>
            Feels Like: {feelsLike}<br/>
        </StyledDiv>
    )
}
