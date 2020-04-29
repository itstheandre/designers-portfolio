import React from "react"
import styled from "styled-components"
import { screenConst } from "../utils/styleConst"

const Copyright = () => {
  return (
    <CopyrightStyle>
      &copy; Catarina Rosa de Albuquerque and André de Albuquerque | 2020
    </CopyrightStyle>
  )
}

export default Copyright

const CopyrightStyle = styled.div`
  text-align: center;
  font-size: 1.2rem;
  line-height: 150%;
  color: var(--grey);
  margin-bottom: 2.4rem;

  @media (${screenConst.lapMin}) {
    font-size: 1rem;
  }
`
