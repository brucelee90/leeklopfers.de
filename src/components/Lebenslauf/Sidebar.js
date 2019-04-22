import React from "react"
import styled from "styled-components"
import { Section, styles } from "../../utils"
import { FaMapMarker, FaPhone, FaEnvelopeOpenText, FaBirthdayCake, FaLinkedin, FaGithub } from "react-icons/fa"
import {Link} from 'gatsby'
import img from '../../images/LeeKlopfers.png'

export default function Sidebar({ infos }) {
  console.log(infos)

  return (
    <SidebarWrapper>
      <div className="img" />
      <div className="ueberschrift">Info</div>

      {/* Info Section */}
      <div className="info">
        {/* Adresse */}
        <div>
          <FaMapMarker />
        </div>
        <div className="ueberschrift-2">Adresse</div>
        <div />
        <ul>
          <li>Gnesener Str. 97</li>
          <li>70376 Stuttgart</li>
        </ul>
      </div>

      <div className="info">
        {/* Telefon */}
        <div>
          <FaPhone />
        </div>
        <div className="ueberschrift-2">Telefon</div>
        <div />
        <ul>
          <li>0176/ 38 92 64 63</li>
        </ul>
      </div>

      <div className="info">
        {/* E-Mail */}
        <div>
          <FaEnvelopeOpenText />
        </div>
        <div className="ueberschrift-2">E-Mail</div>
        <div />
        <ul>
          <li>leeklopfers@gmx.de</li>
        </ul>
      </div>

      <div className="info">
        {/* Geburtstag */}
        <div>
          <FaBirthdayCake />
        </div>
        <div className="ueberschrift-2">Geburtstag</div>
        <div />
        <ul>
          <li>am 14.12.1990</li>
          <li>in Mission B.C. Kanada</li>
        </ul>
      </div>

    {/* Links */}
      <div className="ueberschrift">Links</div>
      
      <div className="info">
        <div>
          <FaLinkedin />
        </div>
        <div className="ueberschrift-2">Linked in</div>
        <div />
        <ul>
          <li>
            <a href='https://www.linkedin.com/in/lee-klopfers-6b9015173' target="_blank" rel="noopener" className="link">
                 linkedin.com/leeklopfers
            </a>
          </li>
        </ul>
      </div>

        <div className="info">
        <div>
          <FaGithub />
        </div>
        <div className="ueberschrift-2">Github</div>
        <div />
        <ul>
          <li>
            <a href='https://github.com/brucelee90' target="_blank" rel="noopener" className="link">
                 github.com/brucelee90
            </a>
          </li>
        </ul>
      </div>

    </SidebarWrapper>
  )
}

const SidebarWrapper = styled.div`
  height: 100%;
  background: #ccc;
  padding: 2rem;
  grid-template-rows: 10rem 4fr 1fr;

  .img {
    background: url('${img}');
    background-size: 100%;
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    display: block;
    margin: 0 auto 1rem;
  }

  .info {
    display: grid;
    grid-template-columns: 1.5rem 6fr;
    margin-top: 1rem;

    ul {
      margin-top: 0.1rem;
    }

    li {
      list-style-type: none;
      font-size: 0.8rem;

        a{
            text-decoration:none;
            color: black;
        }
        .link:after{
            display:block;
            content: '';
            border-bottom: solid 2px ${styles.colors.yellow};
            transform: scaleX(0);
            transition: transform 250ms ease-in-out;
        }

        .link:hover:after { 
            transform: scaleX(1); 
        }
      }
  }


`