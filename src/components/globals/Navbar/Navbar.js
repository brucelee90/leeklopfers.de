import React, { Component } from 'react'
import NavbarHeader from './NavbarHeader'
import NavbarIcons from "./NavbarIcons"
import NavbarLinks from "./NavbarLinks"
import styled from 'styled-components'
import {Section} from '../../../utils'
// import Scrollspy from 'react-scrollspy'

export default class Navbar extends Component {
    state={
        navbarOpen:false
    }
    // Methode zum öffnen und schließen der Navbar
    handleNavbar = () =>{
        this.setState(()=>{
            return{navbarOpen:!this.state.navbarOpen}
        }
        )
    }
  render() {
    return (
        <NavWrapper>
                <NavbarHeader handleNavbar={this.handleNavbar}/>
                <NavbarLinks navbarOpen={this.state.navbarOpen}/>
                <NavbarIcons/>
        </NavWrapper>
    )
  }
}

const NavWrapper = styled.nav`
padding: 0 .6rem;

@media (min-width:768px){
    display:flex;
    align-items:center;
}
`