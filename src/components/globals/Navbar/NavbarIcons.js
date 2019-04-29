import React, { Component } from 'react'
import styled from 'styled-components'
import {styles} from '../../../utils'
import {FaInstagram, FaLinkedin, FaGithub} from 'react-icons/fa'

export default class NavbarIcons extends Component {
  state={
    icons:[
      {
        id:1,
        icon:<FaLinkedin className="icon" />,
        path:'https://www.linkedin.com/in/lee-klopfers-6b9015173/'
      },
      {
        id:2,
        icon:<FaGithub className="icon" />,
        path:'https://github.com/brucelee90'
      }
    ]
  }
  render() {
    return (
      <IconWrapper>
      {
        // Über alle Icons aus dem state iterieren
        this.state.icons.map(item => {
          return(
          <a 
          target='_blank'
          rel='noopener noreferrer'
          style={{cursor:'default'}} 
          href={item.path} 
          key={item.id}>{item.icon}</a>
          )
        })
      }
      </IconWrapper>
    )
  }
}

const IconWrapper = styled.div`
.icon{
  font-size: 1.3rem;
  color: ${styles.colors.mainBlack};
  margin: 0 .7rem;

  &:hover{
    color: ${styles.colors.primaryColor};
    transition: ${styles.transDefault};
    cursor:pointer;
  }

  display:none;
  @media(min-width: 768px){
    display:inline-block;
    // width: .7rem;
    justify-content: space-around;
  }
}
`
