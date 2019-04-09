import React, { Component } from 'react'
import styled from 'styled-components'
import {styles} from '../../../utils'
import {FaInstagram, FaTwitter, FaFacebook} from 'react-icons/fa'

export default class Footer extends Component {
  state={
    icons: [
      {
        id:1,
        icon: <FaFacebook className="icon"/>,
        path: 'https://www.facebook.com'
      },
      {
        id:2,
        icon: <FaTwitter className="icon"/>,
        path: 'https://www.twitter.com'
      },
      {
        id:3,
        icon: <FaInstagram className="icon"/>,
        path: 'https://www.instagram.com'
      },
    ]
  }
  render() {
    return (
      <FooterWrapper>
        <div className="title">
          LEE'S INN
        </div>
        <div className="icons">
          {this.state.icons.map(item => (
            <a 
            href={item.path} 
            key={item.id} 
            target="_blank" 
            rel="noopener noreferrer"> 
              {item.icon} 
            </a>
          ))}
        </div>
        <p className="copyright">
          copyright &copy; 2019 LEE'S INN
        </p>
      </FooterWrapper>
    )
  }
}

const FooterWrapper = styled.footer `
  padding: 2rem 0;
  background: ${styles.colors.mainBlack};
  
  .icons{
    width: 10rem;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
  }

  .icon{
    @media(min-width: 768px){
    display:none;
    }
    color: ${styles.colors.mainWhite};

    &:hover{
      color: ${styles.colors.primaryColor};
      transition: ${styles.transDefault};
      cursor:pointer;
      }
    }
  }
  .copyright{
    color: ${styles.colors.mainWhite};
    text-transform: capitalize;
    text-align: center;
    margin: 1rem 0;
  }
  .title{
    letter-spacing: .15rem;
    text-align: center;
    color: ${styles.colors.mainWhite};
    width: 10rem;
    text-transform: uppercase;
    padding: 0.8rem 1rem .6rem 1rem;
    margin: 0 auto 2rem auto;
    font-size: 1.2rem;
    ${styles.border({color: `${styles.colors.mainWhite}`})
    }
`