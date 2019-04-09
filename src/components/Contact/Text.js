import React, { Component } from 'react'
import styled from "styled-components"

export default class Text extends Component {
  render() {
    return (
      <TextWrapper>
        <div className="e-mail-img">
          test
        </div>
        {/* <img src="https://images.pexels.com/photos/990819/pexels-photo-990819.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
        className="e-mail-img" /> */}
      </TextWrapper>
    )
  }
}

const TextWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #bbb;
    position: relative;

    .e-mail-img{
      width: 100%;
      background: url('https://images.pexels.com/photos/990819/pexels-photo-990819.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500');
      height: 10rem;
      /* position: absolute;
      top:0;
      left: 0; */
      /* background: red; */
    }
`