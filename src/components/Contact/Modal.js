import React, { Component } from "react"
import styled from 'styled-components'

export default class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalOpen: ''
        };
    }
    componentWillUnmount() {
        this.setState({
            modalOpen: 'block'
        })
      }

  render() {
    const modal = this.props.openModal
    // console.log('modal:', modal);

    return (
      <ModalWrapper>
        <div id="myModal"
        className="modal"
        style={{display: modal}}
        >
          <div className="modal-content">
            <span className="close">&times;</span>
            <p>Some text in the Modal..</p>
          </div>
        </div>
      </ModalWrapper>
    )
  }
}

const ModalWrapper = styled.div`

/* The Modal (background) */
.modal {
  display: none;
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
}

/* The Close Button */
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
`