import React from 'react'

import styled from 'styled-components'
import { createGlobalStyle } from "styled-components"
// import "@fontsource/roboto" 

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`

const Container = styled.div`
  /* max-width: 1680px; */
  margin: 0 auto;
  display: grid;
  grid-template-rows: 150px auto auto auto auto auto;
  /* grid-column-gap: 16px; */
`


const Layout = ({children}) => {
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