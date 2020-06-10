import React from "react"
import styled from "styled-components"
import { h3, body, sections } from "../styles/GlobalStyles"

const About = () => {
  return (
    <AboutWrapper>
      <div className="heroW hero bgBlue colWhite"></div>
      <div className="wrapper heroW">
        <div className="thingsIKnow mAuto">
          <article>
            <div className={sections}>Before</div>
            <h3 className={h3}>Lots of research</h3>
            <p className={body}>
              Before each project, I like to research as much as I can in order
              to understand how to better approach it (who’s the audience, what
              is the goal of the project, what are the trends right now, etc.).
            </p>
          </article>
          <article>
            <div className={sections}>During</div>
            <h3 className={h3}>Drafts, drafts, drafts</h3>
            <p className={body}>
              As a designer I have this constant desire to do better, so I try
              to draft as much options as I can before going to the computer and
              open any software. This also allows me to take all the ideas out
              of my head.
            </p>
          </article>
          <article>
            <div className={sections}>After</div>
            <h3 className={h3}>Learning and improving</h3>
            <p className={body}>
              I really like to be challenged and feel like I’m learning, this is
              why I’m always asking for feedback and the results of the final
              creatives so I can apply all the learnings to the next project.
            </p>
          </article>
        </div>
      </div>
    </AboutWrapper>
  )
}

const AboutWrapper = styled.div`
  .hero {
    margin-bottom: ${4.8 * 2}rem;
  }

  .thingsIKnow {
    display: grid;
    width: 90%;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 6.4rem;
    margin-top: 2.4rem;

    @media (max-width: 1010px) {
      grid-template-columns: 1fr 1fr 1fr;
    }

    .sections {
      margin-bottom: 1.6rem;
    }
    .h3 {
      margin-bottom: 3.6rem;
    }
  }
`

export default About
