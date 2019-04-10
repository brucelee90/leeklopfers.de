import React from "react";
import { navigateTo } from "gatsby-link";
import styled from 'styled-components'
import { Title, styles, Section } from "../../utils"

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

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      email: null,
      message: null,
      formErrors:{
        name: '.',
        email: '.',
        message: '.'
      },
      modalOpen: false,
      disabled: true
    };
  }

  handleChange = e => {
    this.setState(
      {[e.target.name]: e.target.value },
      ()=>console.log()
    )

    e.preventDefault()
    const {name, value} = e.target
    let formErrors = this.state.formErrors
    
    switch(name){
      case 'name':
        formErrors.name = 
          value.length < 3 && value.length >= 0
            ? "Ihr Name sollte mindestens 2 Zeichen lang sein"
            : '';
            break;

      case 'message':
        formErrors.message = 
          value.length < 6 && value.length >= 0
            ? "Ihre Nachricht sollte mindestens 6 Buchstaben beinhalten"
            : '';
            break;

      case 'email':
          formErrors.email =
          emailRegex.test(value) && value.length >= 0
              ? ''
              : 'Bitte prüfen Sie ihre E-Mail-Adresse';
              break;
      }

      this.setState(
        {formErrors, [name]: value},
        ()=> console.log(this.state)
      )

      formValid(this.state.formErrors) === true && this.setState({disabled: false})

  }

  handleSubmit = e => {
    e.preventDefault();
    if (formValid(this.state.formErrors) === true) {
      this.setState(
        {modalOpen: true}, ()=>console.log(this.state.modalOpen)
        )
    }

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

  };

  render() {
    return (
      <ContactWrapper>
        <FormWrapper
          name="contact"
          method="post"
          action="/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
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

          <p>
            <lable>
              <div 
              className={'title ' + (this.state.formErrors.name.length > 0 && 'error')}>
              
              Name
              </div>
              
              <input 
              className="field"
              type="text" 
              name="name" 
              onChange={this.handleChange}
              
              />
            </lable>
          </p>
          <p>
            <lable>
            <div className={'title ' + (this.state.formErrors.email.length > 0 && 'error')}>
                E-Mail
              </div>
              <input 
              className="field"
              type="email" 
              name="email" 
              onChange={this.handleChange} />
            </lable>
          </p>
          <p>
            <lable>
              <div 
              className={'title ' + (this.state.formErrors.message.length > 0 && 'error')}>
                Nachricht
              </div>
              <textarea 
              className="field text-area"
              name="message" 
              rows="15"
              onChange={this.handleChange} />
            </lable>
          </p>
          <p>
            <button disabled={this.state.disabled} type="submit">
            Send</button>
          </p>
        </FormWrapper>
      </ContactWrapper>
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
  background: ${styles.colors.lightGrey};
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
}

.submit{
  color: ${styles.colors.mainBlack};
    border: .1rem ${styles.colors.mainBlack} solid;
    width:50%;
    padding: .25rem;
    font-size: .8rem;
    transition: 50ms linear;

    &:hover{
        cursor:pointer;
        background-color: ${styles.colors.mainBlack};
        color: ${styles.colors.primaryColor};
    }
    &:disabled{
      color: ${styles.colors.mainGrey};
      background-color: ${styles.colors.lightGrey};
      cursor: not-allowed;
    }
}
`