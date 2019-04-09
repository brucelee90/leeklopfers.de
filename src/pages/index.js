import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import img from '../images/homeBcg.jpeg'
import {Header, Banner, BannerButton} from '../utils'
import Projects from '../components/Projects/Projects'
import About from '../components/About/About'
import Contact from '../components/Contact/Contact'


const IndexPage = () => (
  <Layout>
    <Header img={img}>
      <Banner title="Willkommen" subtitle="mein name ist lee"/>
    </Header>
    <Projects/>
    <About/>
    <Contact/>
  </Layout>
)

export default IndexPage
