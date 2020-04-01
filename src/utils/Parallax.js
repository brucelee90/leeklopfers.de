import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"

export default function Parallax({ img }) {
  return <ParallaxWrapper img={img}></ParallaxWrapper>
}

const ParallaxWrapper = styled.div`
  /* background:red; */
  height: 75vh;
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
    url(${props => props.img}) center/cover fixed no-repeat;
  /* 
  display: flex;
  justify-content: center;
  align-items: center; */
`
