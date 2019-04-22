import React from 'react'
import styled from 'styled-components'

export default function SkillsText() {
  return (
    <SkillsTextWrapper>
      <div className="skills">
        <div className="skills-text-box">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, sunt vel? Consequuntur ipsum ducimus eum tempora nisi doloremque fugit voluptatibus ad consequatur debitis molestiae dolorem quidem, omnis explicabo animi nam rem dolore a provident error eveniet optio? Voluptatem, autem? Aliquam!
            </p>
        </div>
      </div>
    </SkillsTextWrapper>
  )
}

const SkillsTextWrapper = styled.div `
display: grid;
align-items: center;
justify-content: center;
line-height: 1.5rem;
background: red;

  .skills{
    position: relative;

    .skills-text-box{
    background: #eee;
    position: absolute;
    top:0;
    left: 1rem;
  }
}



`