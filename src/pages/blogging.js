import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import img from '../images/homeBcg.jpeg'
import {Header, Banner, BannerButton, Title, styles, Section} from '../utils'
import Lebenslauf from '../components/Lebenslauf/Lebenslauf'
import Template from '../templates/blogTemplate'
import {pageQuery} from '../templates/blogTemplate'
import styled from "styled-components"

export default ({ data }) => (
  <Layout>
  <PostWrapper>
    
    {data.allMarkdownRemark.edges.map(({node}) => {

        return <div className="blog-post">
          <h1>{node.frontmatter.title}</h1>
          <h4>vom {node.frontmatter.date}</h4>
          <div className="html-text" dangerouslySetInnerHTML={{ __html: node.html }} />
          <Link className="link" to={node.frontmatter.path}>Mehr lesen...</Link>
          </div>
    })
    }

  </PostWrapper>
  </Layout>
)
export const query = graphql`
{
  allMarkdownRemark(
    sort: { order: DESC, fields: [frontmatter___date] }
    limit: 1000
  ) {
    edges {
      node {
        html
        frontmatter {
          path
          title
          date(formatString: "DD.MM.YYYY")
        }
      }
    }
  }
}
`

const PostWrapper = styled.div`

h1{
  color:${styles.colors.Orange};
  padding-bottom: .5rem;
}

h4{
  padding-bottom: .5rem;
}

.blog-post{
  background: #e9e9e9;
  padding: 1rem;
  margin: .8rem;
  border-radius: 10px;
  transition: all 0.2s ease-out;

  &:hover{
    -webkit-box-shadow: 0px 0px 10px -8px rgba(0,0,0,0.83);
    -moz-box-shadow: 0px 0px 10px -8px rgba(0,0,0,0.83);
    box-shadow: 0px 0px 10px -8px rgba(0,0,0,0.83);
  }
}

.link{
  color:black;
  text-decoration:none;
  font-weight: bold;
}

.html-text{
  margin-bottom: .8rem;
}

`