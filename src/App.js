import React, {useState} from 'react'
import styled from 'styled-components'

// API
import getWeatherData from './api/index'

import Layout from './containers/Layout'
import Location from './components/Location'
import TodayForcast from './containers/TodayForcast'

const Div = styled.div`
  justify-self: center;
  align-self: center;
`

function App() {

  // set state
  // const [zip, setZip] = useState('')
  // const [name, setName] = useState('')
  // const [description, setDescription] = useState('')
  // const [temp, setTemp] = useState('')
  // const [feelsLike, setFeelsLike] = useState('')

  // const [state, setstate] = useState(initialState)

//  async function fetchData(zip){
//     let payload = await getWeatherData(zip)
    
//     setName(payload.name)
//     setDescription(payload.weather[0].description)
//     setTemp(payload.main.temp)
//     setFeelsLike(payload.main.feels_like)
    
//   }
  // console.log(`${zip} ${name} ${description} ${temp} ${feelsLike}`)
  
  return (
    <>
      {/* <GlobalStyle/> */}
      <Layout>
        <Div>
          <TodayForcast 
            // description = {description}
            // temp = {temp}
            // feelsLike = {feelsLike}
            // name = {name}
          />
          <Location 
          // fetchData = {fetchData} zip = {zip} setZip = {setZip}
          />
        </Div>
        {/* <WeekForcast/> */}
      </Layout>
    </>
  );
}


export default (App);
