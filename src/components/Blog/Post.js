import React from "react"
import { Section, styles } from "../../utils"
import styled from "styled-components"
import img from "../../images/post1.jpg"

export default function Post({content}) {
    const {ueberschrift, } = content
    const {fixed} = content.thumbnail
    console.log(content);

  return (
    <Section>

      <PostWrapper>
        <div className="thumbnail" style={{background: `url("${fixed.src}")`}}/>
        <div className="inhalt">
          <h3 className="title">{ueberschrift}</h3>

          <p className="preview-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur, aspernatur fuga. Quae veniam excepturi distinctio ad
            iure culpa similique ducimus.
          </p>
        </div>
      </PostWrapper>
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
    /* background: url("https://www.reiseuhu.de/wp-content/uploads/2017/04/Barbados-Reise-704x280.jpg") */
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
