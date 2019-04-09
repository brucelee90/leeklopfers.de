import React from 'react'
import styled from 'styled-components'
import img from '../images/homeBcg.jpeg'

function Header({img, children}) {
  return (
    <IndexHeader img={img}>
      {children}
    </IndexHeader>
  )
}
export {Header}

const IndexHeader = styled.header`
  /* background:red; */
  min-height: calc(100vh - 53px);
  background:linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.6)), url(${props => props.img})center/cover fixed no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  `