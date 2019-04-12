import React from "react"
import styled from "styled-components"
import {styles} from '../../utils'

export default function AboutList({ img, text }) {
  return (
    <AboutListWrapper>
        <div className="thumbnail" style={{ background: `url(${img}) -7rem` }}/>
        {/* <img
          src={img}
          alt=""
        /> */}

        <div className="about-text">
          <div>
            <h3>Lorem, ipsum dolor.</h3>
            <p>
              {text}
            </p>
          </div>
        </div>
    </AboutListWrapper>
  )
}

const AboutListWrapper = styled.div`


  background: ${styles.colors.lightGrey};;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 100%;
  grid-template-columns: 1fr 2fr;

  display: grid;
  @media (max-width: 576px) {
    display: none;
  }

  .thumbnail {
    width: 15rem;
    height: 15rem;
    border-radius: 5px;
    transform: scale(1.1, 1.1);
    ${styles.boxShadow};

  }
  .about-text{
      
  }
`
