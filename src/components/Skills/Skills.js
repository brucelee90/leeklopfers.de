import React, { Component } from 'react'
import {Title, Section} from '../../utils'
import SkillsText from './SkillsText'
import SkillsGraph from './SkillsGraph'
import styled from 'styled-components'

export default class Skills extends Component {
  render() {
    return (
      <Section>
        <Title title="übersicht" subtitle="meiner skills"/>
        <SkillsWrapper>
          <div>
            <SkillsText/>
          </div>
          <div>
            <SkillsGraph/>
          </div>
        </SkillsWrapper>
      </Section>
    )
  }
}

const SkillsWrapper = styled.div `
padding: .5rem;
display: grid;
grid-template-columns: 1fr;
align-items: center;
justify-content: center;

@media (min-width:768px){
  grid-template-columns: 1fr 1fr;
}

`