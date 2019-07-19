import React from 'react'
import { Title, styles, Section } from "../../utils"
import {StaticQuery, graphql} from 'gatsby'

const BLOG_POSTS = graphql`
{
    posts:allContentfulBlog{
        edges{
            node{
              	id,
                ueberschrift,
        		    artikel{
                    childContentfulRichText {
                        html
                    }
                }
          	}
        }
    }
}
`

export default function BlogPost() {
  return (
    <Section>
        <StaticQuery query={BLOG_POSTS} render={data => {
                const posts = data.posts.edges
                
                return posts.map(item => {
                    return <div key={item.node.id}>
                        {item.node.ueberschrift}
                        {item.node.artikel.childContentfulRichText.html}
                    </div>
                    
            })
            }
        }>
        </StaticQuery>
    </Section>
  )
}
