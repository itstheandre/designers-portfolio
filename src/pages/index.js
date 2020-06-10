import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { screenConst } from "../utils/styleConst"

const IndexWrapper = styled.div`
  .hero {
    margin-bottom: ${4.8 * 2}rem;
  }

  .base {
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    height: 100%;
  }

  .wrapper {
    align-self: center;
    justify-self: center;
    width: 96%;
  }

  .hello {
    font-size: 3.2rem;
    font-weight: bold;
  }
`

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
  <>
    <SEO title="Home Page" />
    <IndexWrapper>
      <div className="heroW hero bgLB">
        <div className="xtContainer  h100">
          <div className="inContainer h100">
            <div className="base">
              <div className="wrapper">
                <p className="sections colBlue wS">Hello There</p>
                <p className="wS colBlue hello">
                  I'm a communication designer that loves to help brands deliver
                  the <span className="italic">right message</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="projectList heroW">
        <ProjectSection className="mAuto">
          {MockData.map(el => (
            <Project key={el.title} className="projectFont">
              <>
                <h2 className="wS">{el.title}</h2>
                <p className="sections wS">{el.type}</p>
              </>
            </Project>
          ))}
        </ProjectSection>
      </div>
    </IndexWrapper>
  </>
)

export default IndexPage

const ProjectSection = styled.section`
  width: ${screenConst.bigMax};
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
  color: var(--blue);
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
      font-weight: 100;
    }
    p {
      visibility: visible;
    }
  }
`
