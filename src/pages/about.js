import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import img from '../images/homeBcg.jpeg'
import {Header, Banner, BannerButton} from '../utils'
import AboutPage from '../components/About/AboutPage'

export default function Blog() {
  return (
  <Layout>
    <AboutPage/>
  </Layout>
  )
}
