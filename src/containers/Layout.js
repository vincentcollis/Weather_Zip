import React from 'react'

import styled from 'styled-components'
import { createGlobalStyle } from "styled-components"
// import "@fontsource/roboto" 

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-size: 3em;
    text-transform: uppercase;
  }
`

const Container = styled.div`
  display: grid;
  grid-template-rows: 100vh;
  grid-template-columns: 100vw;
`


function Layout({children}){
    return(
        <>
            <GlobalStyle theme="sizing" />
            <Container>
                {children}
            </Container>
        </>
    )

}

export default Layout