import React from "react"
import styled from "styled-components"
import { screenConst } from "../utils/styleConst"
import { captions } from "../styles/GlobalStyles"

const Copyright = () => (
  <CopyRightStyles className={captions}>
    &copy; Catarina Rosa de Albuquerque and André de Albuquerque | 2020
  </CopyRightStyles>
)

const CopyRightStyles = styled.div`
  text-align: center;
  margin-block-end: 2.4rem;
`

export default Copyright
