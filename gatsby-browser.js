/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
import React from "react"
import { GlobalStyle, captions, h3, links } from "./src/styles/GlobalStyles"
import styled from "styled-components"

import Layout from "./src/components/layout"
import Nav from "./src/components/navigation/Nav"
import Footer from "./src/components/Footer"
import Copyright from "./src/components/Copyright"

// You can delete this file if you're not using it

export const wrapRootElement = ({ element }) => (
  <>
    <GlobalStyle />
    <BodyWrapper>
      <Nav />
      {element}
      <Footer />
      <Copyright />
    </BodyWrapper>
  </>
)

const BodyWrapper = styled.div`
  min-height: 100vh;
  overflow-x: none;
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto auto;
`
