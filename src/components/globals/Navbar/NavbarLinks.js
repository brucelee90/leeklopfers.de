import React, { Component } from 'react'
import styled from "styled-components"
import {Link} from 'gatsby'
import { styles } from '../../../utils'
import NavbarIcons from "./NavbarIcons"
import Scrollspy from 'react-scrollspy'

export default class NavbarLinks extends Component {
  state={
    links:[
      {
        id:0,
        path:'#',
        name:'home'
      },
      {
        id: 1,
        path: '#portfolio',
        name: 'portfolio'
      },
      {
        id: 2,
        path: '#about',
        name: 'über mich'
      },
      {
        id: 3,
        path: '#contact',
        name: 'Kontakt'
      },
      {
        id: 4,
        path: '/lebenslauf',
        name: 'Lebenslauf'
      },
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
              <Scrollspy key={item.id}>
              <li >
                <Link to={item.path} className="nav-link">
                  {item.name}
                </Link>
              </li>
              </Scrollspy>
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
  min-width:5rem;
  text-transform: capitalize;
  text-align: center;
}

.nav-link{
  display:block;
  text-decoration: none;
  padding: .3rem .7rem;
  color:${styles.colors.thirdColor};
  font-weight: 300;
  font-size: 1rem;
  cursor:pointer;
  /* margin:.3rem; */
  transition: transform 500ms ease-in-out;
}
@media (max-width:767px){

  .nav-link:before{
    display:inline-block;
    content: '';
    border-color: ${styles.colors.primaryColor};
    border-style: solid;
    border-width: 0 0 0 3px;
    height: 1rem;
    /* transform: scaleX(0); */
    transform: scaleY(0);
    transition: transform 250ms ease-in-out;
    margin-right: .3rem;
  }
  .nav-link:hover:before{
    /* transform: scaleX(1); */
    transform: scaleY(1.5);
  }
}

height: ${props => (props.open?'10rem':'0px')};
overflow:hidden;
transition: ${styles.transObject({time:'.15s'})};

@media (min-width:768px){
  height:auto;
  display:flex;
  margin: auto;

  .nav-link:after{
    display:block;
    content: '';
    border-bottom: solid 3px ${styles.colors.primaryColor};
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
  }

  .nav-link:hover:after { 
    transform: scaleX(1); 
  }
}
`