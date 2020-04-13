import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"

export default function Parallax({ img }) {
  return <ParallaxWrapper img={img}></ParallaxWrapper>
}

const ParallaxWrapper = styled.div`
  height: 75vh;
  background-color: #ab0000;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpolygon fill='%23ba1703' points='1600 160 0 460 0 350 1600 50'/%3E%3Cpolygon fill='%23c82f06' points='1600 260 0 560 0 450 1600 150'/%3E%3Cpolygon fill='%23d74608' points='1600 360 0 660 0 550 1600 250'/%3E%3Cpolygon fill='%23e55e0b' points='1600 460 0 760 0 650 1600 350'/%3E%3Cpolygon fill='%23f4750e' points='1600 800 0 800 0 750 1600 450'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
`
