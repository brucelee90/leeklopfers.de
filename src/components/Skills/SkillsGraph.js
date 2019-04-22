import React from "react"
import styled from "styled-components"
import {styles} from "../../utils"

export default function SkillsGraph() {
  return (
    <SkillsGraphWrapper>
      <div className="skills-graph-circle-1">
        <div className="skills-graph-image">
            <div className="html-skill">
                HTML
            </div>
            <div className="css-skill">
                CSS
            </div>
            <div className="js-skill">
                JS
            </div>
            <div className="google-skill">
                Google <br/> Suche
            </div>
        </div>
      </div>
    </SkillsGraphWrapper>
  )
}

const circleWidth = 9
const circle = 'border-radius: 50%;'

const size = (prozent)=>{
    prozent = prozent/10
    let faktor = 1.5
    prozent = prozent/faktor
    return (
        `
        width: ${prozent}rem;
        height: ${prozent}rem;
        `
    )
}

const SkillsGraphWrapper = styled.div`
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .skills-graph-circle-1{
      ${circle}
      position: relative;
      /* background: black; */
      border: 1px solid #ccc;
      width: ${circleWidth*2}rem;
      height: ${circleWidth*2}rem;
      display: flex;
      align-items: center;
      justify-content: center;
  }

  .skills-graph-image {
    ${circle}
    background: #eee;
    background-repeat: no-repeat;
    background-size: 14rem auto;
    width: ${circleWidth}rem;
    height: ${circleWidth}rem;
    display: flex;
    align-items: center;
    justify-content: center;
    -webkit-box-shadow: inset 0px 0px 26px -16px rgba(0,0,0,0.75);
    -moz-box-shadow: inset 0px 0px 26px -16px rgba(0,0,0,0.75);
    box-shadow: inset 0px 0px 26px -16px rgba(0,0,0,0.75);
    border: 1px solid #ccc;
  }

  .html-skill{
      ${styles.boxShadow};
      ${circle}
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${styles.colors.OrangeGradient};
      ${size(100)}
      top: -.8rem;
      left: 0;
  }
  .css-skill{
    ${styles.boxShadow};
      color: ${styles.colors.mainWhite};
      ${circle}
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${styles.colors.darkerOrangeGradient};
      ${size(80)}
      bottom: -.8rem;
      right: 0;
  }
  .js-skill{
    ${styles.boxShadow};
      ${circle}
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${styles.colors.yellowGradient};
      ${size(60)}
      top: 2rem;
      right: -.5rem;
  }
  .google-skill{
    ${styles.boxShadow};
      color: white;
      ${circle}
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${styles.colors.greenGradient};
      text-align: center;
      ${size(100)}
      bottom: -2rem;
      left: 1rem;
  }
`
