import React, { Component } from 'react'
import { Title, styles, Section } from "../../utils"
import styled from "styled-components"

export default class About extends Component {
  render() {
    return (
      <Section>
        <Title title="etwas" subtitle="über mich" />
        <AboutWrapper>
          {/* <div className="me-img"> */}
          
            <div className="image">
              <img src="https://media.istockphoto.com/photos/happy-laughing-man-picture-id544358212?k=6&m=544358212&s=612x612&w=0&h=odURMNz2hty8LIfpVahaaUKpGU4vd-UlZx4jy-OAnJA=" alt=""/>
            </div>
          {/* </div> */}
          <div className="about-text">
            <div>
              <h3>
                Lorem, ipsum dolor.
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis cum pariatur placeat culpa iste aspernatur praesentium quam quisquam illum aperiam.
              </p>
            </div>
          </div>
        </AboutWrapper>
      </Section>
    )
  }
}

const AboutWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;

  @media(min-width:576px){
        grid-template-columns: 1fr 1fr;
    }

    .image{
      overflow: hidden;
      border-radius: 5px;
      display: flex;
      justify-content: center;
      align-items: center;

      img{
        max-width:100%;
        max-height: 100%;
      }
    }


  /* } */

  .about-text{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 1rem;
    p{
      margin-top:1rem;
    }
  }
`