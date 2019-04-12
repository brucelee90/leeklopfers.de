import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import img from '../images/homeBcg.jpeg'
import {Header, Banner, BannerButton} from '../utils'
import Posts from '../components/Blog/Posts'

export default function Blog() {
  return (
    <Layout>
    <Header img={img}>
      <Banner title="Hier entsteh" subtitle="mein blog"/>
    </Header>
    <Posts/>
  </Layout>
  )
}
