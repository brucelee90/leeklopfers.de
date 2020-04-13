import React, { Component } from "react"
import { Title, styles, Section } from "../../utils"
import styled from "styled-components"
import AboutList from "./AboutList"
import AboutCard from "./AboutCard"
import img from "../../images/me/Lee.jpeg"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ABOUT_ME_IMG = graphql`
  {
    img1: file(relativePath: { eq: "me/Lee.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    img2: file(relativePath: { eq: "me/Lee2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`

const text =
  "Vor über zwei Jahren hat meine Reise als Web-Entwickler begonnen. Ich habe mir die Basics zu HTML, CSS und Javascript beigebracht und habe bereits verschiedene Frameworks, wie ReactJS, GatsbyJS oder NextJS kennengelernt."
const uebrschrift = "Schön dich kennen zu lernen"

const About = () => (
  <StaticQuery
    query={ABOUT_ME_IMG}
    render={data => {
      const img1 = data.img1.childImageSharp.fluid
      const img2 = data.img2.childImageSharp.fluid
      return (
        <Section id="about">
          <Title title="über" subtitle="mich" />
          <AboutWrapper>
            {/* <Img fixed={data.img1.childImageSharp.fluid.src} /> */}
            <AboutList
              className="about-list"
              img={img1}
              ueberschrift={uebrschrift}
              text={text}
            />
            <AboutCard
              className="about-card"
              img={img2}
              ueberschrift={uebrschrift}
              text={text}
            />
          </AboutWrapper>
        </Section>
      )
    }}
  />
  // }
)

export default About

const AboutWrapper = styled.div`
  .about-text {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 3rem;
    p {
      margin-top: 1rem;
    }
  }
`
