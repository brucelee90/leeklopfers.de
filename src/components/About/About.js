import React, { Component } from "react"
import { Title, styles, Section } from "../../utils"
import styled from "styled-components"
import AboutList from "./AboutList"
import AboutCard from "./AboutCard"

const text = 'Vor knapp zwei Jahren hat meine Reise als Web-Entwickler begonnen. Ich habe mir die Basics zu HTML, CSS und Javascript beigebracht, habe verschiedene Frameworks kennengelernt. Ich habe mich durch die Untiefen von Google gekämpft'
const uebrschrift = 'Schön Sie kennen zu lernen'
const img = "https://media.istockphoto.com/photos/happy-laughing-man-picture-id544358212?k=6&m=544358212&s=612x612&w=0&h=odURMNz2hty8LIfpVahaaUKpGU4vd-UlZx4jy-OAnJA="

export default class About extends Component {
  render() {
    return (
      <Section id="about">
        <Title title="über" subtitle="mich" />
        <AboutWrapper>
          <AboutList className='about-list' img={img} ueberschrift={uebrschrift} text={text}/>
          <AboutCard className='about-card' img={img} ueberschrift={uebrschrift} text={text}/>
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
