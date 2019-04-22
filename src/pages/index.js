import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import img from '../images/BcgImages/Lemonade.jpeg'
import {Header, Banner, BannerButton} from '../utils'
import Projects from '../components/Projects/Projects'
import About from '../components/About/About'
import Contact from '../components/Contact/Contact'
import Lebenslauf from '../components/Lebenslauf/Lebenslauf'
// import React from "react"
import { Helmet } from "react-helmet"



const IndexPage = () => (

  <Layout>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Lee Klopfers - Frontend Entwickler</title>
          <link rel="shortcut icon" href="favicon.png" type="image/x-icon"/>
        </Helmet>

    <Header img={img}>
      <Banner title="Willkommen" subtitle="Mein name ist Lee"/>
    </Header>
    <About/>
    <Projects/>
    <Contact/>

  </Layout>
  
)

export default IndexPage
