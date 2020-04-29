import React from "react"
import styled from "styled-components"

const Footer = () => {
  return (
    <FooterStyle className="fw">
      <div className="innerFw">
        <div className="h3">
          For any enquiries, or just to{" "}
          <span className="italic">say hello</span>
        </div>
        <ul className="contactLinks">
          <li>hello@catarinarosa.co</li>
          <li>LinkedIn</li>
          <li>Dribble</li>
        </ul>
      </div>
    </FooterStyle>
  )
}

export default Footer

const FooterStyle = styled.footer`
  background: var(--lightBlue);
  height: 18.2rem;
  margin: 0 auto 4.4rem;
  color: var(--blue);

  .innerFw {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;

    .contactLinks {
      list-style-type: none;
      display: grid;
      align-items: center;
      grid-template-columns: repeat(3, auto);
      grid-gap: 3.2rem;
      li {
        font-size: 1.4rem;
      }
    }
  }
`
