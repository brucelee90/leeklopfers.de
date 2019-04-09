import React, { Component } from "react"
import { Title, styles, Section } from "../../utils"
import styled from "styled-components"
import Img from "gatsby"
import { FaSearch, FaGithub } from "react-icons/fa"

export default class Projects extends Component {
  state = {
    projects: [
      {
        id: 1,
        name: "restaurant",
        link: "https://lees-restaurant.netlify.com/",
        github: "https://github.com/brucelee90",
        img:
          "https://media-cdn.tripadvisor.com/media/photo-s/0e/cc/0a/dc/restaurant-chocolat.jpg",
        frameworks: ["react", "bootstrap"],
      },
      {
        id: 2,
        name: "real-estate",
        link: "lees-restaurant.netlify.com",
        github: "https://github.com/brucelee90",
        img:
          "https://media-cdn.tripadvisor.com/media/photo-s/0e/cc/0a/dc/restaurant-chocolat.jpg",
        frameworks: ["react", "bootstrap"],
      },
      {
        id: 3,
        name: "todo",
        link: "lees-restaurant.netlify.com",
        github: "https://github.com/brucelee90",
        img:
          "https://media-cdn.tripadvisor.com/media/photo-s/0e/cc/0a/dc/restaurant-chocolat.jpg",
        frameworks: ["react", "bootstrap"],
      },
    ],
  }

  render() {
    return (
      <>
      <Section>
        <Title title="und das sind" subtitle="meine Projekte" />
        <ProjectWrapper>
          {this.state.projects.map(item => {
            return (
              <div className="project">
                <img src={item.img} alt="project" />
                <div className="info">
                  <div className="project-container">
                    <div className="project-name">{item.name}</div>
                    <div className="link">
                      <a
                        href={item.link}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <FaSearch className="search" />
                      </a>
                    </div>

                    <div className="project-info">
                      Frameworks:<br />
                      <ul>
                        {item.frameworks.map(fw => {
                          return <li>{fw}</li>
                        })}
                      </ul>
                    </div>
                    <div className="github">
                        <a
                            href={item.github}
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <FaGithub className="github"/>
                        </a>
                        
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </ProjectWrapper>
        </Section>
      </>
    )
  }
}

const ProjectWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto;
  grid-gap: 0.8rem;

  @media(min-width:576px){
        grid-template-columns: 1fr 1fr;
    }
    @media(min-width:768px){
        grid-template-columns: repeat(3, 1fr);
    }

  .project {
    position: relative;
    color: white;

    .info {
      opacity: 0;
      position: absolute;
      top: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.6);
      height: 100%;
      width: 100%;

      display: flex;
      justify-content: center;
      align-items: center;

      .project-container {
        color: white;

        .project-name {
          text-transform: capitalize;
          margin-bottom: 2rem;
          font-size: 2rem;
        }
        .link {
          text-align: center;
        }
      }

      .project-info {
        position: absolute;
        bottom: 0;
        right: 0;
        margin: 1rem;
        text-align: right;
        font-size: 0.9rem;
        font-weight: 100;

        ul {
          list-style-type: none;
          margin-top: 0.2rem;
        }
      }
      .github{
        position: absolute;
        bottom: 0;
        left: 0;
        margin: 1rem;
        font-size: 1.3rem;
        color: white;
      }
      
      transition: .2s linear;
      &:hover {
        opacity: 1;
    }
  }

  img {
    width: 100%;
    height: 100%;
  }

  .search {
    color: ${styles.colors.mainWhite};
    font-size: 2.5rem;
  }
`
