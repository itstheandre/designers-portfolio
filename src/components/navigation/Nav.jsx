import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { menu } from "../../styles/GlobalStyles"

const NavBar = styled.nav`
  height: 4.8rem;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  ul {
    list-style-type: none;
    display: grid;
    grid-template-columns: auto auto;
    /* grid-gap: 3.2rem; */

    @media (max-width: 899px) {
      display: none;
    }

    li {
      &:last-child {
        text-align: right;
      }
    }

    a {
      color: var(--blue);
    }
  }

  @media (max-width: 899px) {
    height: 3.6rem;
  }

  .name {
    font-size: 2rem;
    line-height: 135.96%;
    font-weight: bold;

    a {
      color: var(--blue);
    }

    @media (max-width: 899px) {
      font-size: 1.6rem;
    }
  }
`

const Nav = () => {
  const [open, setOpen] = React.useState(false)
  return (
    <NavBar className="heroW">
      <div className="name wS">
        <Link to="/">Catarina Rosa</Link>
      </div>
      <ul>
        {/* <li>
          <Link className={menu} to="/work">
            Work
          </Link>
        </li> */}
        <li>
          <Link className={menu} to="/about">
            About me
          </Link>
        </li>
      </ul>
      <Burger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </Burger>
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

  @media (max-width:899px) {
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
