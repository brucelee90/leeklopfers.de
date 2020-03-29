import React from 'react'
import {Header, Banner, BannerButton, Section} from '../../utils'
import img from '../../images/BcgImages/AboutMe.jpeg'
import styled from 'styled-components'

export default function AboutPage() {
  return (
    <>
    <Header img={img}>
      <Banner title="etwas mehr" subtitle="über mich"/>
    </Header>
    <Section>
        <AboutPageTextWrapper>
        <h3>
            Meine Reise als Web-Entwickler
        </h3>
        <p>
            Vor über zwei Jahren hat meine Reise als Web-Entwickler begonnen. Ich habe mir die Basics zu HTML, CSS und Javascript beigebracht und habe bereits verschiedene Frameworks, wie React, Gatsby oder NextJS kennengelernt. 
        </p>
        <p>
            Inzwischen beherrsche ich diese gut und habe ein weitaus tieferes Verständnis dafür. 
            In der zwischenzeit habe ich auch professionelle Erfahrung gesammelt. Und konnte einige Kundenprojekte umsetzen.
        </p>
        <p>
            Zudem bin ich eingeschriebener Teilzeit-Student an der Fernuni-Hagen. Ich befinde mich zurzeit im {(new Date().getFullYear() -  2017)*2}. Semester des Studiengangs Wirtschaftsinformatik.
        </p>
        <p>
            Wenn ich nicht am Arbeiten, oder am lernen bin, genieße ich meine Zeit mit Freunden und der Familie, oder beim Sport.
        </p>
        </AboutPageTextWrapper>
    </Section>
    </>
  )
}

const AboutPageTextWrapper = styled.div`
h3{
    margin-bottom: 1.5rem;
}
p{
    margin-bottom: 1rem;
}
text-align:center;
`