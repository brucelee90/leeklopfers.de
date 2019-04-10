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
          value.length < 3 && value.length > 0
            ? "Ihr Name sollte mindestens 2 Zeichen lang sein"
            : '';
            break;

      case 'message':
        formErrors.message = 
          value.length < 6 && value.length > 0
            ? "Ihre Nachricht sollte mindestens 6 Buchstaben beinhalten"
            : '';
            break;

      case 'email':
          formErrors.email =
          emailRegex.test(value) && value.length > 0
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
      console.log(`
      --SUBMITTING
      name: ${this.state.name}
      `);

      this.setState(
        {modalOpen: true}, ()=>console.log(this.state.modalOpen)
        )
    }else{
      console.log('error');
    }

  };

  render() {
    return (
      <div>
        <h1>Contact</h1>
        <form
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
            <LabelWrapper>
              <div className={this.state.formErrors.name.length > 0 && 'error'}>
              Name
              </div>
              
              <input 
              type="text" 
              name="name" 
              onChange={this.handleChange}
              
              />
            </LabelWrapper>
          </p>
          <p>
            <LabelWrapper>
            <div className={this.state.formErrors.email.length > 0 && 'error'}>
                E-Mail
              </div>
              <input 
              type="email" 
              name="email" 
              onChange={this.handleChange} />
            </LabelWrapper>
          </p>
          <p>
            <LabelWrapper>
              <div className={this.state.formErrors.message.length > 0 && 'error'}>
                Nachricht
              </div>
              <textarea 
              name="message" 
              onChange={this.handleChange} />
            </LabelWrapper>
          </p>
          <p>
            <button disabled={this.state.disabled} type="submit">
            Send</button>
          </p>
        </form>
      </div>
    );
  }
}

const LabelWrapper = styled.label`

.error{
  color: ${styles.colors.danger};
  }

`