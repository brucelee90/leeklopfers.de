import React, { Component } from 'react'
import styled from 'styled-components'
import Sidebar from './Sidebar'
import HauptSection from './HauptSection'
import {Section, styles} from '../../utils'

export default class Lebenslauf extends Component {
  render() {
    return (
    <Section>
      <LayoutWrapper>
        <div>
            <Sidebar/>
        </div>
        <div>
            <HauptSection/>
        </div>
      </LayoutWrapper>
    </Section>
    )
  }
}

const LayoutWrapper = styled.div`
${styles.boxShadow}
/* background: #ccc; */
display: grid;
grid-template-columns: 1fr 3fr;
max-width: 2480;

.ueberschrift{
  font-size: 1.2rem;
  border-bottom: 1px solid black;
  padding-bottom: .3rem;
  font-weight: bold;
  margin-top: 1.2rem;
  text-transform: uppercase;
  letter-spacing: .1rem;
}

.ueberschrift-2{
  font-size: 1rem;
  text-transform: capitalize;
}

` 

