import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import GlobalStyle from "../styles/GlobalStyles"
import Header from "./header"
import Nav from "./navigation/Nav"
import Footer from "./Footer"
import Copyright from "./Copyright"

// import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyle />
      <Nav />

      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      {/* <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      > */}
      <main>{children}</main>
      <Footer />
      <Copyright />
      {/* <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer> */}
      {/* </div> */}
    </>
  )
}

export default Layout
