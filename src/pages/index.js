import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Layout from "../components/layout"
import Projects from "../components/Projects/Projects"
import About from "../components/About/About"
import Contact from "../components/Contact/Contact"
import { Parallax } from "../utils/index"
import Hero from "../components/Hero/Hero"
import Timeline from "../components/Timeline/Timeline"

const SINGLE_IMAGE = graphql`
  {
    img1: file(relativePath: { eq: "BcgImages/MAC.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          src
        }
      }
    }
    img2: file(relativePath: { eq: "BcgImages/Contact.jpg" }) {
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

          <Hero />
          <About />
          <Projects />
          <Timeline />
          <Parallax img={img2} />
          <Contact />
        </Layout>
      )
    }}
  />
)

export default IndexPage
