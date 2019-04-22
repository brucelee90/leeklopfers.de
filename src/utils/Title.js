import React from 'react'
import styled from 'styled-components'
import {styles} from '../utils'

export function Title({title, subtitle}) {
  return (
    <TitleWrapper>
      <h3 className="title">
          {title}
      </h3>
      <h1 className="subtitle">
          {subtitle}
      </h1>
      <div className="underline"></div>
    </TitleWrapper>
  )
}

Title.defaultProps = {
    title: 'Titel',
    subtitle: 'Untertitel'
}

const TitleWrapper = styled.div `
width: 100%;
margin: 2rem auto;
text-align: center;
padding: 1rem;

.title{
    /* ${styles.textMonoSpace}; */
    
    ${styles.letterSpacing({spacing:'.1rem'})};
    font-size: 2rem;
    color:${styles.colors.primaryColor};
    font-size: 100;
    text-transform: capitalize;
}
.subtitle{
    ${styles.letterSpacing({spacing:'.1rem'})};
    font-size: 2rem;
    text-transform: uppercase;
}
.underline{
    width: 6rem;
    height: 0.2rem;
    background: ${styles.colors.primaryColor};
    margin: 0.5rem auto;
}
`
