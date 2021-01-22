import React from 'react'
import styled from 'styled-components'

// styling
const StyledDiv = styled.div`
    grid-column: 2/2 ;
    grid-row : 4/5;
`

export default function TodayForcast(props) {
    // destruct props
    let {feelsLike, temp, description} = props

    

    console.log(temp)
    return (
        <StyledDiv>
            {description}<br/>
            Current Temperture:  {temp}<br/>
            Feels Like: {feelsLike}<br/>
        </StyledDiv>
    )
}
