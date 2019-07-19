import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import img from '../images/homeBcg.jpeg'
import {Header, Banner, BannerButton} from '../utils'
import Lebenslauf from '../components/Lebenslauf/Lebenslauf'
import BlogPost from '../components/Blog/BlogPost'

export default function Blog() {
  return (
    <Layout>
      <BlogPost/>
  </Layout>
  )
}