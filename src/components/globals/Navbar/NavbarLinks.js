import React, { Component } from 'react'
import styled from "styled-components"
import {Link} from 'gatsby'
import { styles } from '../../../utils'
import NavbarIcons from "./NavbarIcons"

export default class NavbarLinks extends Component {
  state={
    links:[
      {
        id:0,
        path:'/',
        name:'home'
      },
      {
        id: 1,
        path: '/about',
        name: 'über'
      },
      {
        id: 2,
        path: '/menu',
        name: 'karte'
      },
      {
        id: 3,
        path: '/contact',
        name: 'reservieren'
      }
    ]
  }

  render() {
    
    return (
      <LinkWrapper open={this.props.navbarOpen}>
        {
          // Über alle Links aus dem state iterieren
          this.state.links.map(item => {
            return(
              // Für map() Methode braucht jedes Tag einen key.
              // key ist immer die id
              <li key={item.id}>
                <Link to={item.path} className="nav-link">
                  <LinkBorder>
                    {item.name}
                  </LinkBorder>
                  <div className="underline"></div>
                </Link>
              </li>
            )
          })
        }
      </LinkWrapper>
    )
  }
}

const LinkWrapper = styled.ul`
li{
  list-style-type: none;
  text-decoration: none;
  min-width:5rem; */
}
.nav-link{
  display:block;
  text-decoration: none;
  padding: .3rem .7rem;
  color:${styles.colors.thirdColor};
  font-weight: 300;
  font-size: 1.1rem;
  cursor:default;
}

height: ${props => (props.open?'152px':'0px')};
overflow:hidden;
transition: ${styles.transObject({time:'.3s'})};
@media (min-width:768px){
  height:auto;
  display:flex;
  margin: auto;
}

`

const LinkBorder = styled.div`

  text-transform: capitalize;
  background:
  linear-gradient(
    to bottom, ${styles.colors.primaryColor} 0%,
    ${styles.colors.primaryColor} 100%
  );
  background-position: left bottom;
  background-repeat: repeat-x;
  background-size: 2px .4rem;
  color: #000;
  text-decoration: none;
  transition: ${styles.transDefault};
  width:1.5rem;
  overflow: visible;
  @media (min-width:768px){
    width:25%;
  }
  

  &:hover{
    @media (min-width:768px){
    width:100%;
    }
    width:6rem;
    cursor:pointer;
  }
}
`