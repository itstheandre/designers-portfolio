import React, { useState } from "react"
import styled from "styled-components"
import { screenConst } from "../../utils/styleConst"
import { Link } from "gatsby"

const Nav = () => {
  const [open, setOpen] = useState(false)

  return (
    <NavBar className="fw">
      <h2 className="name">Catarina Rosa</h2>
      <div className="menu-links">
        <ul>
          <Link to="/work">
            <li>Work</li>
          </Link>
          <Link to="/about">
            <li>About me</li>
          </Link>
        </ul>
        <Burger open={open} onClick={() => setOpen(!open)}>
          <div />
          <div />
          <div />
        </Burger>
      </div>
    </NavBar>
  )
}

const Burger = styled.button`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  display: none;

  @media (${screenConst.lapMin}) {
    display: flex;
    /* display: block; */
  }

  div {
    width: 2rem;
    height: 0.25rem;
    /* background: ${({ open }) => (open ? "#0D0C1D" : "#EFFFFA")}; */
    background: var(--blue);
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    /* background-color: #003157; */
    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`

export default Nav

const NavBar = styled.nav`
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ul {
    list-style-type: none;
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 3.2rem;

    @media (${screenConst.lapMin}) {
      display: none;
    }

    a {
      text-decoration: none;
      font-size: 1.4rem;
      color: var(--blue);
    }
    li {
    }
  }

  @media (${screenConst.tabMin}) {
    height: 36px;
  }

  .name {
    font-size: 2rem;
    line-height: 135.96%;
    color: var(--blue);
  }
`
