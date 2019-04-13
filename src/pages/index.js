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
import HeaderText from '../components/HeaderText'


const IndexPage = () => (
  <Layout>
    {/* <Header img={img}> */}
    <Header >
      {/* <HeaderText/> */}
    </Header>
    {/* <About/>
    <Projects/>
    <Contact/> */}
  </Layout>
)

export default IndexPage
