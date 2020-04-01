import React from "react"
import styled from "styled-components"
import { FaReact } from "react-icons"

import { styles, Section } from "../../utils"
import TimelineProject from "./TimelineProject"
import DCC from "../../images/ProjectImages/DCC_All_Small.gif"
import Avene from "../../images/ProjectImages/Avene_All_Small.gif"
import Aderma from "../../images/ProjectImages/Aderma_All_Small.gif"
import Restaurant from "../../images/ProjectImages/Restaurant.jpg"

const projects = [
  {
    name: "Avène - Dermo Cosme Card",
    date: "März 2020",
    description:
      "Kundenprojekt: Erstellung von neuer Landing Page in responsive Design",
    image: DCC,
    github: "",
    website: "https://www.eau-thermale-avene.de/dermo-cosme-card-dev",
    techStack: [
      "ReactJS",
      "NextJS",
      "StorybookJS",
      "Sass",
      "Atomic Design",
      "Google Tag Manager",
    ],
  },
  {
    name: "Avène - Gewinnspiel",
    date: "Dezember 2019",
    description:
      "Kundenprojekt: Erstellung von neuer Landing Page für Gewinnspiel",
    image: Avene,
    github: "",
    website: "https://www.eau-thermale-avene.de/gewinnspiel",
    techStack: [
      "ReactJS",
      "NextJS",
      "StorybookJS",
      "Sass",
      "Atomic Design",
      "FB Pixel",
    ],
  },
  {
    name: "A-DERMA - Exomega",
    date: "Januar 2020",
    description: "Kundenprojekt: Erstellung von neuer Landing Page ",
    image: Aderma,
    github: "",
    website: "https://www.exomega.aderma.de",
    techStack: ["HTML", "Sass", "Vanilla JS"],
  },
  {
    name: "Homepage für Restaurant",
    date: "März 2019",
    description: "Übungsprojekt",
    image: Restaurant,
    github: "https://github.com/brucelee90/lees-restaurant",
    website: "https://lees-restaurant.netlify.com/",
    techStack: ["ReactJS", "GatsbyJS", "Contentful", "Sass"],
  },
]

const Timeline = () => {
  return (
    <Section id="timeline">
      <TimelineWrapper>
        <div id="timeline-content">
          <ul className="timeline">
            {projects.map(project => (
              <li className="event">
                <TimelineProject
                  date={project.date}
                  heading={project.name}
                  paragraph={project.description}
                  img={project.image}
                  githubLink={project.github}
                  websiteLink={project.website}
                  techStack={project.techStack}
                />
              </li>
            ))}
          </ul>
        </div>
      </TimelineWrapper>
    </Section>
  )
}

export default Timeline

const TimelineWrapper = styled.div`
  body {
    background: #252827;
    font-size: 16px;
  }
  p {
    font-weight: 300;
    margin-top: 1rem;
  }

  strong {
    font-weight: 600;
  }
  h1 {
    letter-spacing: 1.5px;
    color: #ffffff;
    font-weight: 400;
    font-size: 2.4em;
  }
  #timeline-content {
    margin-top: 50px;
    text-align: center;
  }
  /* Timeline */
  .timeline {
    border-left: 4px solid ${styles.colors.primaryColor};
    border-bottom-right-radius: 4px;
    border-top-right-radius: 4px;
    background: rgba(255, 255, 255, 0.03);
    margin: 50px auto;
    letter-spacing: 0.5px;
    position: relative;
    line-height: 1.4em;
    font-size: 1.03em;
    padding: 50px;
    list-style: none;
    text-align: left;
    font-weight: 100;
    /* max-width: 60%; */
  }
  .timeline h1 {
    letter-spacing: 1.5px;
    font-weight: 100;
    font-size: 1.4em;
  }
  .timeline h2,
  .timeline h3 {
    letter-spacing: 1.5px;
    font-weight: 400;
    font-size: 1.4em;
  }
  .timeline .event {
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
    padding-bottom: 25px;
    margin-bottom: 50px;
    position: relative;
  }
  .timeline .event:last-of-type {
    padding-bottom: 0;
    margin-bottom: 0;
    border: none;
  }
  .timeline .event:before,
  .timeline .event:after {
    position: absolute;
    display: block;
    top: 0;
  }
  .timeline .event:after {
    box-shadow: 0 0 0 4px ${styles.colors.primaryColor};
    left: -57.85px;
    background: white;
    border-radius: 50%;
    height: 11px;
    width: 11px;
    content: "";
    top: 5px;
  }
`
