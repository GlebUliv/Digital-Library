import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";
import BookList from "./components/BookLists/BookList";
import Modal from "./components/Modal/Modal";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      bookName: "",
      author: "",
      description: "",
    };
  }

  showModal = (bookName, author, description) => {
    this.setState({
      showModal: !this.state.showModal,
      bookName,
      author,
      description,
    });
  };

  render() {
    const { showModal, bookName, author, description } = this.state;
    return (
      <div className="wrapper">
        {showModal && (
          <Modal
            showModal={() => this.showModal()}
            bookName={bookName}
            author={author}
            description={description}
          />
        )}

        <div className="asd">
          <BookList
            showModal={(bookName, author, description) =>
              this.showModal(bookName, author, description)
            }
          />
        </div>
      </div>
    );
  }
}

export default App;
