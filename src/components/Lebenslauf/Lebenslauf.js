import React, { Component } from "react"
import styled from "styled-components"
import Sidebar from "./Sidebar"
import HauptSection from "./HauptSection"
import { Section, styles } from "../../utils"

export default class Lebenslauf extends Component {
  constructor(props) {
    super(props)
    this.state = { value: "", active: false, display: "none" }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  validate(event) {
    var pass = event.target.value
    var reg = "/^(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/"
    var test = reg.test(pass)
    if (test) {
      alert("pass")
    } else {
      alert("fail")
    }
  }

  handleSubmit(event) {
    event.preventDefault()
    let active = false

    if (this.state.value === "test") {
      active = true
    }

    this.setState({ active: active })
  }

  render() {
    return (
      <Section>
        <Form display={this.state.active === true ? "none" : "flex"}>
          <div className="input-wrapper">
            <label className="label" for="fname">
              Passwort
            </label>
            <input
              className="form-input"
              onChange={this.handleChange}
              type="text"
              id="fname"
              name="fname"
            />
            <span className="span">Eingabe des Passworts</span>
          </div>
          <button className="submit" onClick={this.handleSubmit}>
            Eingabe
          </button>
        </Form>
        {this.state.active === true ? (
          <LayoutWrapper>
            <div>
              <Sidebar />
            </div>
            <div>
              <HauptSection />
            </div>
          </LayoutWrapper>
        ) : (
          ""
        )}
      </Section>
    )
  }
}

const LayoutWrapper = styled.div`
  ${styles.boxShadow}
  display: grid;
  grid-template-columns: 1fr 3fr;
  max-width: 1280px;
  margin: auto;

  .ueberschrift {
    font-size: 1.2rem;
    border-bottom: 1px solid black;
    padding-bottom: 0.3rem;
    font-weight: bold;
    margin-top: 1.2rem;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
  }

  .ueberschrift-2 {
    font-size: 1rem;
    text-transform: capitalize;
  }
`

const Form = styled.form`
  display: ${props => props.display};
  flex-direction: column;
  width: 50%;
  margin: auto;
  background: white;
  padding: 2rem 1rem;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.1);
  border-radius: 3px;

  .input-wrapper {
    display: block;
    padding: 9px;
    border: 1px solid #ddd;
    margin-bottom: 2rem;
    border-radius: 3px;

    .label {
      float: left;
      height: 1.25rem;
      margin-top: -1.25rem;
      background: white;
      padding: 0.1rem 0.2rem;
      color: #aaa;
      font-size: 0.875rem;
      overflow: hidden;
    }

    .form-input {
      box-sizing: border-box;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      width: 100%;
      display: block;
      outline: 0;
      border: 0;
      line-height: 1.5rem;
      padding: 0;
      color: ${styles.colors.thirdColor};

      &:focus {
        outline: none;
      }
    }

    .span {
      background: #f3f3f3;
      display: block;
      padding: 0;
      margin: 0 -9px -9px -9px;
      text-align: center;
      color: #aaa;
      font-size: 0.7rem;
      line-height: 1.875rem;
    }
  }
  .submit {
    cursor: pointer;
    color: white;
    background-color: ${styles.colors.primaryColor};
    padding: 0.75rem;
    border-style: none;
    border-radius: 2px;
    font-size: 1rem;
    transition: 0.2s ease-in-out all;

    &:hover {
      background-color: ${styles.colors.secondaryColor};
      transition: 0.2s ease-in-out all;
    }

    &:focus {
      outline: none;
    }
  }
`
