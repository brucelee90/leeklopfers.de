// import React from "react"
import styled from "styled-components"


import React, { Component } from 'react'

export default class Hero extends Component {
  
  componentDidMount () {
      
    }

  render() {
    return (
      <HeroWrapper>
        <div>
          <h1><span className="welcome">Willkomen</span> <br/> <span className="my-name"> Mein Name ist Lee</span> </h1>
        <canvas></canvas>
      </div>
    </HeroWrapper>
    )
  }
}


const HeroWrapper = styled.div `

h1{

  text-align: center;
  color: black;
  padding: 0;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-transform: uppercase;
  .welcome{
    font-size: 2.4rem;
    text-transform:capitalize;
  }
  .my-name{
    font-weight: 300;
    font-size: 2.5rem;
    text-transform:capitalize;
  }
}

canvas{
    width: 100vw;
    height: 100vh;
    margin: auto;
}
`