import React, { Component } from "react"
import { Title, styles, Section } from "../../utils"
import styled from "styled-components"
import AboutList from "./AboutList"
import AboutCard from "./AboutCard"

const text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum corporis veritatis ea porro qui ipsum temporibus sed odit quae maxime, omnis nam nulla, optio minus cum? Necessitatibus est expedita mollitia!'
const img = "https://media.istockphoto.com/photos/happy-laughing-man-picture-id544358212?k=6&m=544358212&s=612x612&w=0&h=odURMNz2hty8LIfpVahaaUKpGU4vd-UlZx4jy-OAnJA="

export default class About extends Component {
  render() {
    return (
      <Section id="about">
        <Title title="das" subtitle="bin ich" />
        <AboutWrapper>
          <AboutList className='about-list' img={img} text={text}/>
          <AboutCard className='about-card' img={img} text={text}/>
        </AboutWrapper>
      </Section>
    )
  }
}

const AboutWrapper = styled.div`

  .about-text {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 1rem;
    p {
      margin-top: 1rem;
    }
  }
`
