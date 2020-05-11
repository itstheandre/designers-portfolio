import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { screenConst } from "../utils/styleConst"

const MockData = [
  {
    title: "The Pioneers Show",
    type: "Design Cool",
  },
  {
    title: "Quandoo's Global Summit",
    type: "Branding",
  },
  { title: "Casa de los bytes", type: "Design" },
  {
    title: "Quandoo's Winter Summit",
    type: "Event Branding",
  },
  {
    title: "Illustrating Quandoo",
    type: "Illustration",
  },
]

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <IndexBlock className="fw">
      <header>
        <div className="sections">Home</div>
        <h1 className="h1">
          I’m a communication designer that loves to help brands deliver the{" "}
          <span className="h2 italic">right message</span>
        </h1>
      </header>
    </IndexBlock>
    <ProjectSection>
      {MockData.map(el => (
        <Project key={el.title} className="projectFont">
          <>
            <h2>{el.title}</h2>
            <p className="sections">{el.type}</p>
            {/* <div className="italic">
              <h3>{el.title}</h3>
            </div> */}
          </>
        </Project>
      ))}
    </ProjectSection>
  </Layout>
)

export default IndexPage

const ProjectSection = styled.section`
  width: ${screenConst.bigMax};
  margin: 0 auto 9.6rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 3.6rem;
`

const Project = styled.article`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 11.6rem;
  h2 {
    font-size: 5rem;
  }
  p {
    padding-top: 0.8rem;
    font-size: 1.5rem;
    line-height: 120%;
    visibility: hidden;
    text-transform: uppercase;
  }

  :hover {
    h2 {
      font-family: "Libre Baskerville", serif;
      font-style: italic;
    }
    p {
      visibility: visible;
    }
  }
`

const IndexBlock = styled.main`
  height: calc(100vh - ${48 * 2}px);
  background: var(--lightBlue);
  display: flex;
  align-items: center;
  color: var(--blue);
  margin: 0 auto 4.8rem;

  @media (${screenConst.tabMin}) {
    height: calc(100vh - ${36 * 2}px);
    margin: 0 auto 3.6rem;
  }

  header {
    padding: 0 16rem;
    width: ${screenConst.bigMax};
    margin: 0 auto;

    @media (${screenConst.lapMin}) {
      padding: 0 14.4rem;
    }

    @media (${screenConst.tabMin}) {
      padding: 0 7.2rem;
    }

    @media (${screenConst.phoneMin}) {
      padding: 0;
      width: 80vw;
    }
  }

  .sections {
    padding-bottom: 1.6rem;
  }
`
