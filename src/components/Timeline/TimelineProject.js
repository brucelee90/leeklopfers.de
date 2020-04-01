import React from "react"
import styled from "styled-components"
import { FaGithub, FaExternalLinkAlt, FaReact, FaSass } from "react-icons/fa"

import { colors, media } from "../../utils/styles"

const TimelineProject = ({
  date,
  heading,
  paragraph,
  img,
  githubLink,
  websiteLink,
  techStack,
}) => {
  return (
    <TimelineProjectWrapper>
      <h6>{date}</h6>
      <h2 className="heading">{heading}</h2>
      <div className="content-container">
        <p className="paragraph">{paragraph}</p>
        <img className="image" src={img} alt="project" />
      </div>

      <div className="content-container">
        <p className="paragraph">Seite anschauen:</p>
        {githubLink ? (
          <a
            className="time-line-link"
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="time-line-icon" />
          </a>
        ) : (
          ""
        )}
        <a
          className="time-line-link"
          href={websiteLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaExternalLinkAlt className="time-line-icon" />
        </a>
      </div>

      <div className="content-container">
        <p className="paragraph">Technologie Stack:</p>
        <ul className="tech-stack-list">
          {techStack.map(tech => (
            <li className="tech-stack-list--item">{tech}</li>
          ))}
        </ul>
      </div>
    </TimelineProjectWrapper>
  )
}

export default TimelineProject

const TimelineProjectWrapper = styled.div`
  .heading {
    margin-bottom: 1.5rem;
  }
  .paragraph {
    margin-bottom: 0.8rem;
  }
  .image {
    border-radius: 5px;
    width: 100%;
    display: block;

    @media (min-width: ${media.tablet}) {
      width: 75%;
    }
    @media (min-width: ${media.desktop}) {
      width: 45%;
    }
  }

  .time-line-icon {
    font-size: 1.7rem;
    transition: ease-in-out 0.2s all;

    &:hover {
      color: ${colors.primaryColor};
      transition: ease-in-out 0.2s all;
    }

    &--tech {
      font-size: 2rem;
      margin-right: 1.75rem;
    }
  }

  .time-line-link {
    color: black;
    margin-right: 1.75rem;
  }

  .content-container {
    margin-bottom: 1.5rem;
  }

  .tech-stack-list {
    list-style: none;

    &--item {
      line-height: 1.7rem;
      &:before {
        content: "🚀";
      }
    }
  }
`
