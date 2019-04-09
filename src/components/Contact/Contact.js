import React from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import { Title, styles } from "../../utils"
import styled from "styled-components"
import Text from "./Text"
import {FaPaperPlane} from 'react-icons/fa'

const Contact = () => (
  <>
    <Title title="direkter" subtitle="kontakt" />
    <ContactWrapper>
      <div>
        <Formik
          initialValues={{ email: ""}}
          validate={values => {
            let errors = {}
            if (!values.email) {
              errors.email = "Bitte E-Mail-Addresse eingeben"
              errors.isValid = false
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Ungültige E-Mail-Adresse"
              errors.isValid = false
            } 
            return errors
            
          }}
          onSubmit={(values, { setSubmitting }) => {
            
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2))
              setSubmitting(false)
            }, 400)
          }}
        >
          {({ isSubmitting, errors }) => (
             
            <FormWrapper>
              <Form method="POST" data-netlify="true">
                <form action="post">
                <div>
                  
                  <p className="title">
                    E-Mail-Addresse
                  </p>
                  <Field type="email" name="email" className="field e-mail"/>
                </div>

                <div>
                  <p className="title message">
                    Nachricht
                  </p>
                  <textarea className="text-area field" rows="15" style={{width: '100%'}}></textarea>
                </div>

                  {errors.isValid !== false &&
                    <button type="submit" disabled={isSubmitting} className="submit" >
                      Nachricht Senden <FaPaperPlane className="plane"/>
                    </button>
                  }
                  {errors.isValid === false &&
                    <ErrorMessage name="email" disabled component="button" className="submit"/>
                  }
                </form>
              </Form>
            </FormWrapper>
          )}
        </Formik>
      </div>
      {/* <div>
        <Text />
      </div> */}
    </ContactWrapper>
  </>
)

export default Contact

const ContactWrapper = styled.div`  
width: 100%;
display: grid;
grid-template-columns: 1fr;
`

const FormWrapper = styled.form`
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