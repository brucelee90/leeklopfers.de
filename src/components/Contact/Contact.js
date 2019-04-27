import React from "react";
import { navigateTo } from "gatsby-link";
import styled from 'styled-components'
import { Title, styles, Section } from "../../utils"
import {FaPaperPlane, FaCheckCircle} from 'react-icons/fa'
import Modal from './Modal'

const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

const formValid = formErrors =>{
  // Standardmäßig ist alles valid
  let valid = true

  // Object in Array übergeben, sodass iteriert werden kann
  let arrFormErrors = Object.values(formErrors)
  arrFormErrors.map(val => {
    val.length > 0 && (valid=false)
  })
  return valid
}

function resetForm() {
   document.getElementById("myForm").reset();
}

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      email: null,
      message: null,
      formErrors:{
        name: '(mindestens 3 Zeichen)',
        email: ' ',
        message: '(mindestens 5 Zeichen)'
      },
      disabled: true,
      thankYouMessage:''
    };
  }

  handleChange = e => {
    this.setState(
      {[e.target.name]: e.target.value },
    )

    e.preventDefault()
    const {name, value} = e.target
    let formErrors = this.state.formErrors
    
    switch(name){
      case 'name':
        formErrors.name = 
          value.length < 3 && value.length >= 0
            ? "(mindestens 3 Zeichen)"
            : <FaCheckCircle className="check"/>;
            break;

      case 'message':
        formErrors.message = 
          value.length <= 5 && value.length >= 0
            ? "(mindestens 5 Zeichen)"
            : <FaCheckCircle className="check"/>;;
            break;

      case 'email':
          formErrors.email =
          emailRegex.test(value) && value.length >= 0
              ? <FaCheckCircle className="check"/>
              : ' ';
              break;
      }

      this.setState(
        {formErrors, [name]: value}
      )

      formValid(this.state.formErrors) === true && this.setState({disabled: false})

  }

  handleSubmit = e => {

    e.preventDefault();
    if (formValid(this.state.formErrors) === true) {
      this.setState(
        {modalOpen: 'block'}
        )
    }

    resetForm()

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => this.setState(
        {
          name: null,
          email: null,
          message: null,
          formErrors:{
            name: '(mindestens 3 Zeichen)',
            email: ' ',
            message: '(mindestens 5 Zeichen)'
          },
        thankYouMessage: 'Vielen Dank!',
        disabled: true,
      }
        ))

      .catch(error => alert(error));

  };

  render() {
    return (
      <Section id="contact">
        <Title title="direkter" subtitle="kontakt"/>

        <FormWrapper
          name="contact"
          method="post"
          action="/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
          id="myForm"
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don’t fill this out:{" "}
              <input 
              name="bot-field" 
              onChange={this.handleChange} />
            </label>
          </p>

          <div>
            <label>
              <div 
              className={'title ' + (this.state.formErrors.name.length > 0 && 'error')}>
              
              Name {this.state.formErrors.name}
              </div>
              
              <input 
              placeholder="Ihr Name"
              className="field"
              type="text" 
              name="name" 
              onChange={this.handleChange}
              
              />
            </label>
          </div>
          <div>
            <label>
            <div className={'title ' + (this.state.formErrors.email.length > 0 && 'error')}>
                E-Mail {this.state.formErrors.email}
              </div>
              <input 
              placeholder="beispiel@mail.de"
              className="field"
              type="email" 
              name="email" 
              onChange={this.handleChange} />
            </label>
          </div>
          <div>
            <label>
              <div 
              className={'title ' + (this.state.formErrors.message.length > 0 && 'error')}>
                Nachricht {this.state.formErrors.message}
              </div>
              <textarea 
              placeholder="Ich freue mich auf Ihre Nachricht..."
              className="field text-area"
              name="message" 
              rows="15"
              onChange={this.handleChange} />
            </label>
          </div>
          <div>
            <button
            className="submit"
            disabled={this.state.disabled} 
            type="submit">
            {
              this.state.thankYouMessage.length > 0
              ? this.state.thankYouMessage
              : <FaPaperPlane className="plane"/>
            }
            </button>
          </div>
        </FormWrapper>
      </Section>
    );
  }
}

const LabelWrapper = styled.label`

/* .error{
  color: ${styles.colors.danger};
  } */

`

const ContactWrapper = styled.div`  
width: 100%;
display: grid;
grid-template-columns: 1fr;
background: black;
`

const FormWrapper = styled.form`


.error{
  color: ${styles.colors.danger};
}

.title{
  margin-bottom: .3rem;
  padding: 3px;
}

.field{
  margin-bottom: 1rem;
  padding: .5rem;
  border: none;
  background: ${styles.colors.lightGrey};;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 100%;
}
.e-mail{
  width: 50%;
}
.text-area{
  font-family:'Josefin Sans', sans-serif;
  font-size: .8rem;
  resize: none;
}

.plane{
  margin-left: .5rem;
  font-size: 1.1rem;
}

.check{
  color: ${styles.colors.success};
  font-size: .8rem;
}

.submit{
  color: ${styles.colors.green};
    border: .1rem #ddd solid;
    border-radius: 5px;
    width:50%;
    padding: .25rem;
    font-size: .8rem;
    transition: 50ms linear;

    &:hover{
        cursor:pointer;
        background-color: ${styles.colors.mainWhite};
        color: ${styles.colors.green};
    }
    &:disabled{
      color: ${styles.colors.mainBlack};
      background-color: ${styles.colors.lightGrey};
      cursor: not-allowed;
    }
}
`