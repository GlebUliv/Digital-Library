import React, { Component } from "react";
import "./Modal.css";

class Modal extends Component {
  render() {
    const { showModal, bookName, author, description } = this.props;
    return (
      <div
        className="modal-overlay"
        onClick={() => {
          showModal();
        }}
      >
        <span>X</span>
        <div className="modal-content">
          <h1>{bookName}</h1>
          <h5>
            <b>AUTHOR:</b> {author}
          </h5>
          <p>
            Description: <br />
          </p>
          <h2>{description}</h2>
        </div>
      </div>
    );
  }
}

export default Modal;
