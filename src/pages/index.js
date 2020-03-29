import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import img from "../images/BcgImages/Lemonade.jpeg"
import { Header, Banner, BannerButton } from "../utils"
import Projects from "../components/Projects/Projects"
import About from "../components/About/About"
import Contact from "../components/Contact/Contact"
import Lebenslauf from "../components/Lebenslauf/Lebenslauf"
import { Parallax } from "../utils/index"
// import React from "react"
import { Helmet } from "react-helmet"
import { StaticQuery, graphql } from "gatsby"
import Hero from '../components/Hero/Hero'

const SINGLE_IMAGE = graphql`
  {
    img1: file(relativePath: { eq: "BcgImages/MAC.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          src
        }
      }
    }
    img2: file(relativePath: { eq: "BcgImages/Contact.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          src
        }
      }
    }
  }
`

const IndexPage = () => (
  <StaticQuery
    query={SINGLE_IMAGE}
    render={data => {
      const img1 = data.img1.childImageSharp.fluid.src
      const img2 = data.img2.childImageSharp.fluid.src
      return (
        <Layout>
          <Helmet>
            <meta charSet="utf-8" />
            <title>Lee Klopfers - Frontend Entwickler</title>
            <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
            <script defer src="./script.js"></script>
          </Helmet>

          <Hero/>
          <About />
          <Projects />
          <Parallax img={img2} />
          <Contact />
        </Layout>
      )
    }}
  />
)

export default IndexPage