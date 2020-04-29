import React from "react"
import styled from "styled-components"
import { screenConst } from "../../utils/styleConst"

const Nav = () => {
  return (
    <NavBar className="fw">
      <h2 className="name">Catarina Rosa</h2>
    </NavBar>
  )
}

export default Nav

const NavBar = styled.nav`
  height: 48px;
  display: flex;
  align-items: center;

  @media (${screenConst.tabMin}) {
    height: 36px;
  }

  .name {
    font-size: 2rem;
    line-height: 135.96%;
    color: var(--blue);
  }
`
