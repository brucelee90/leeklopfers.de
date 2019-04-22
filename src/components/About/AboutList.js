import React from "react"
import styled from "styled-components"
import {styles} from '../../utils'
import {Link} from 'gatsby'

export default function AboutList({ img, text, ueberschrift }) {
  return (
    <AboutListWrapper>
        <div className="thumbnail" style={{ background: `url(${img}) -7rem` }}/>
        {/* <img
          src={img}
          alt=""
        /> */}

        <div className="about-text">
          <div>
          <h3>{ueberschrift}</h3>
            <p>
              {text}
              <LinkWrapper>
                <Link to='/about' className="nav-link" className='link'>
                  [...mehr]
                </Link>
              </LinkWrapper>
            </p>
          </div>
        </div>
    </AboutListWrapper>
  )
}

const AboutListWrapper = styled.div`


  background: ${styles.colors.lightGrey};;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 100%;
  grid-template-columns: 1fr 2fr;

  display: grid;
  @media (max-width: 576px) {
    display: none;
  }

  .thumbnail {
    width: 15rem;
    height: 15rem;
    border-radius: 5px;
    transform: scale(1.1, 1.1);
    ${styles.boxShadow};

  }
  .about-text{
      
  }
`

const LinkWrapper = styled(Link)`
text-decoration:none;

.link{
  color: black;
  text-decoration: none;
  padding: .3rem .7rem;
  color:${styles.colors.thirdColor};
  font-weight: 300;
  font-size: 1rem;
}


`