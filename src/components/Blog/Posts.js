import React from "react"
import { Section, styles } from "../../utils"
import styled from "styled-components"
import img from "../../images/post1.jpg"
import { StaticQuery, graphql } from "gatsby"
import Post from './Post'

const POST = graphql`
{
    items:allContentfulBlog {
      edges {
        node {
          id,
          ueberschrift,
          
          thumbnail{
            fixed(width:150, height:150){
                ...GatsbyContentfulFixed_tracedSVG
            }
           }
          childContentfulBlogArtikelRichTextNode {
            id,
            content {
              content {
                value
              }
            }
          }
        }
      }
    }
  }
`

export default function Posts() {
  return (
    <Section>
      <StaticQuery
        query={POST}
        render={data => {
          const post = data.items.edges
          return post.map(item => {
            return (
            <div>
                <Post key={item.node.id} content={item.node}/>
            </div>
            
            )
          })
        }}
      />      
    </Section>
  )
}

let width = "12rem"

const PostWrapper = styled.div`
  display: grid;
  /* grid-template-rows:1fr 1fr 100px; */
  grid-template-columns: ${width} 1fr;
  border: 1px solid #dedede;
  border-radius: 7px;
  overflow: hidden;
  transition: 150ms linear;

  &:hover {
    ${styles.boxShadow};
    cursor: pointer;
  }

  .thumbnail {
    background: url("https://www.reiseuhu.de/wp-content/uploads/2017/04/Barbados-Reise-704x280.jpg")
      50% 50% no-repeat; /* 50% 50% centers image in div */
    width: ${width};
    height: ${width};
    margin-right: 2rem;
    display: inline-block;
  }

  .inhalt {
    padding: 1rem;
    background: #fbfbfb;
    .title {
      margin-bottom: 1.5rem;
    }
    .preview-text {
      font-weight: 100;
    }
  }
`
