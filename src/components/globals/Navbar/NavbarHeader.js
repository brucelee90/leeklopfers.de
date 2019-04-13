import React, { Component } from 'react'
import {Link} from 'gatsby'
import logo2 from '../../../images/logo3.svg'
import { FaBars} from 'react-icons/fa'
import { FaBeer } from "react-icons/fa"
import styled from 'styled-components'
import {styles} from '../../../utils'

export default class NavbarHeader extends Component {
  render() {
    const {handleNavbar} = this.props
    return (
      <HeaderWrapper>
        
        <Link style={{textDecoration:'none'}} to="/">
          <Logo>
            &#60;LeeVincent&#47;&#62;
          </Logo>
        </Link>
       
       <div className="toggle-wrapper">
        <FaBars
          className="toggle-icon"
          onClick={() => {
            handleNavbar()
          }}
        />

        </div>

        
      </HeaderWrapper>
    )
  }
}

const HeaderWrapper = styled.div`
  padding: 1.5rem 0.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .toggle-wrapper{

    padding: .1rem .3rem;
    border: 1px solid #bbb;
    border-radius: 50%;
    cursor: pointer;
    color: ${styles.colors.primaryColor};

    .toggle-icon {
    font-size: 1.5rem;
    margin-top: .25rem;
    padding: 0;
    
    }
    @media (min-width: 768px) {
      .toggle-icon {
        display: none;
      }
    }

  }

`
const Logo = styled.div`
  color:${styles.colors.primaryColor};
  ${styles.textMonoSpace};
  font-size:1.5rem;
  text-decoration: none;
`