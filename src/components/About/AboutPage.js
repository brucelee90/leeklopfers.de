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
            Vor knapp zwei Jahren hat meine Reise als Web-Entwickler begonnen. Ich habe mir die Basics zu HTML, CSS und Javascript beigebracht und habe bereits verschiedene Frameworks, wie zum Beispiel React, Gatsby oder Bootstrap kennengelernt. Ich habe Erfahrung im Umgang mit REST APIs gesammelt. Zudem habe ich mich sehr mit dem Responisve Design vertraut gemacht. 
        </p>
        <p>
            Bei dem Meer an Informationen, die für jeden im Internet bereit stehen, habe ich mich stundenlang durch die Untiefen von Google gekämpft, um an die Lösung zu gelangen, die mir bei meinem Problem weiterhelfen kann.
            Daher zähle ich die Google-Recherche definitiv zu einer meiner größten Stärken. :)
        </p>
        <p>
            Ich bin eingeschriebener Teilzeit-Student an der Fernuni-Hagen. Ich befinde mich zurzeit im {(new Date().getFullYear() -  2017)*2}. Semester des Studiengangs Wirtschaftsinformatik. Das Studium hat mir bisher sehr dabei geholfen, die Grundlagen der Informatik zu verstehen.
        </p>
        <p>
            Wenn ich nicht am Arbeiten, oder am lernen bin, genieße ich meine Zeit mit Freunden und der Familie, oder beim Sport. &#128522;
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