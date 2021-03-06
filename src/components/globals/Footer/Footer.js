import React, { Component } from "react"
import styled from "styled-components"
import { styles } from "../../../utils"
import {
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa"

export default class Footer extends Component {
  state = {
    icons: [
      {
        id: 1,
        icon: <FaLinkedin className="icon" />,
        path: "https://www.linkedin.com/in/lee-klopfers-6b9015173/",
      },
      {
        id: 2,
        icon: <FaGithub className="icon" />,
        path: "https://github.com/brucelee90",
      },
    ],
  }
  render() {
    return (
      <FooterWrapper>
        <div className="title">
          <p>leeklopfers.de</p>
        </div>
        <div className="icons">
          {this.state.icons.map(item => (
            <a
              href={item.path}
              key={item.id}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </div>
        <p className="copyright">copyright &copy; 2020 Lee Klopfers</p>
      </FooterWrapper>
    )
  }
}

const FooterWrapper = styled.footer`
  padding: 2rem 0;
  background: ${styles.colors.lightGrey};
  
  .icons{
    width: 10rem;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
  }

  .icon{
    @media(min-width: 840px){
    display:none;
    }
    color: ${styles.colors.mainBlack};

    &:hover{
      color: ${styles.colors.primaryColor};
      transition: ${styles.transDefault};
      cursor:pointer;
      }
    }
  
  .copyright{
    color: ${styles.colors.mainBlack};
    text-transform: capitalize;
    text-align: center;
    margin: 1rem 0;
  }

  .title{
    letter-spacing: .15rem;
    text-align: center;
    display: flex;
  align-items: center;
  justify-content: center;

    color: ${styles.colors.mainBlack};
    width: 13rem;
    /* border-radius:5px; */
    text-transform: uppercase;
    padding: 0.8rem 1rem .6rem 1rem;
    margin: 0 auto 2rem auto;
    font-size: 1.2rem;
    /* ${styles.border({ color: `${styles.colors.green}` })}; */
    border-bottom: 1px solid black;
`
