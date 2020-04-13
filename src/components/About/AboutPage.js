import React from "react"
import { Header, Banner, BannerButton, Section } from "../../utils"
import img from "../../images/BcgImages/AboutMe.jpeg"
import styled from "styled-components"

export default function AboutPage() {
  return (
    <>
      <Header img={img}>
        <Banner title="mehr" subtitle="über mich" />
      </Header>
      <Section>
        <AboutPageTextWrapper>
          <h1 className="heading">Meine Reise als Web-Entwickler</h1>
          <p>
            Vor über zwei Jahren hat meine Reise als Web-Entwickler begonnen.
            Ich habe mir die Basics zu HTML, CSS und Javascript beigebracht und
            habe bereits verschiedene Frameworks, wie ReactJS, GatsbyJS oder
            NextJS kennengelernt.
          </p>
          <p>
            Inzwischen beherrsche ich diese gut und habe ein weitaus tieferes
            Verständnis dafür. Ich konnte auch bereits professionelle Erfahrung
            sammeln und habe einige{" "}
            <a href="https://leeklopfers.de/#portfolio">Kundenprojekte</a>{" "}
            umgesetzt.
          </p>
          <p>
            Zudem bin ich eingeschriebener Teilzeit-Student an der
            Fernuni-Hagen. Ich befinde mich zurzeit im{" "}
            {(new Date().getFullYear() - 2017) * 2}. Semester des Studiengangs
            Wirtschaftsinformatik.
          </p>
          <p>
            Außer meiner Arbeit habe ich natürlich noch andere Hobbies wie zum
            Beispiel Sport treiben und mich mit Freunden und Familie treffen.
          </p>
        </AboutPageTextWrapper>
      </Section>
    </>
  )
}

const AboutPageTextWrapper = styled.div`
  width: 70%;
  margin: 4rem auto 0;

  h1 {
    margin-bottom: 2rem;
  }
  p {
    margin-bottom: 1rem;
  }
  text-align: center;
`
