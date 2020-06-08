import React from "react"
import styled from "styled-components"
import { screenConst } from "../utils/styleConst"
import { h3, links } from "../styles/GlobalStyles"

const Footer = () => (
  <FooterStyle className="heroW">
    <div className="xtContainer h100">
      <div className="inContainer h100">
        <div className={`${h3} clear`}>
          For any enquiries, or just to{" "}
          <span className="italic">say hello</span>{" "}
        </div>
        <ul className="contactLinks">
          <li className={links}>hello@catarinarosa.co</li>
          <li className={links}>LinkedIn</li>
          <li className={links}>Dribble</li>
        </ul>
      </div>
    </div>
  </FooterStyle>
)

export default Footer

const FooterStyle = styled.footer`
  text-align: center;
  height: 18.2rem;
  margin: 9.6rem auto 4.4rem;
  background-color: var(--lightBlue);
  color: var(--blue);

  .inContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 1199px) {
      .clear {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      }
    }

    @media (max-width: 899px) {
      .clear {
        display: block;
        margin-bottom: 2.4rem;
      }
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      padding-left: 7.2rem;
    }

    @media (max-width: 599px) {
      padding-left: 0;
      align-items: center;
      .clear {
        /* margin-block-end: 2rem; */
        width: 100%;
        text-align: left;
        display: flex;
      }
    }
  }

  .contactLinks {
    list-style-type: none;
    display: grid;
    align-items: center;
    grid-template-columns: repeat(3, auto);
    grid-gap: 3.2rem;

    li {
      font-weight: normal;
    }

    @media (max-width: 599px) {
      width: 100%;
      li {
        &:first-child {
          text-align: left;
        }
        &:last-child {
          text-align: right;
        }
      }
    }
  }
`
