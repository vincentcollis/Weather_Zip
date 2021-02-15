import React from 'react'
import styled from 'styled-components'

import Day from '../components/Day'

const Layout = styled.div`
    display: flex;
    flex-direction: column;
`

function WeekForcast(props){

    // This will be information stored in redux
    const weekInfo = [
        {name:'January' , avgTemp:'50' },
        {name:'Febuary' , avgTemp:'45' },
        {name:'March' , avgTemp:'42' },
        {name:'April' , avgTemp:'51' },
        {name:'May' , avgTemp:'48' },
        {name:'June' , avgTemp:'53' },
        {name:'July' , avgTemp:'40' },
        {name:'August' , avgTemp:'40' },
        {name:'September' , avgTemp:'40' },
        {name:'October' , avgTemp:'40' },
        {name:'November' , avgTemp:'40' },
        {name:'Decemeber' , avgTemp:'40' },
    ]

    return(
        <Layout id="week_container">
            {weekInfo.map((info, i) => <Day 
                key = {i}
                position = {i} 
                name = {info.name} 
                date = {info.date} 
                temp = {info.temp}
            />)}
        </Layout>
    )
}

export default WeekForcast;