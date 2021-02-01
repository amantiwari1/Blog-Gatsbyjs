import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

const HeavenlyBody = styled.img`
  cursor: pointer;
  border-radius: 50%;
  user-select: none;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.2);
  }
  margin-left: 10px;
`

const Icon = ({ mode, toggleMode }: { mode: string, toggleMode: (() => void) }) => {
  const data = useStaticQuery(graphql`
    query {
      moon: file(relativePath: { eq: "moon.png" }) {
        publicURL
      }
      sun: file(relativePath: { eq: "sun.png" }) {
        publicURL
      }
    }
  `)

  return (
    <HeavenlyBody
      height="30px"
      width="30px"
      alt="icons"
      src={mode === "light" ? data.sun.publicURL : data.moon.publicURL}
      onClick={toggleMode}
    />
  )
}

export default Icon
