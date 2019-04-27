import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"

export default function Parallax({ img }) {
    {console.log(img)}
  return <ParallaxWrapper img={img} ></ParallaxWrapper>
}

const ParallaxWrapper = styled.div`
  /* background:red; */
  height: 40vh;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
   url(${props => props.img}) center/cover fixed no-repeat; 
   /* 
  display: flex;
  justify-content: center;
  align-items: center; */
`
