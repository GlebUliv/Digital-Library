import React, { Component } from "react";
import "./Book.css";
import Button from "../Button/Button";

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }

  render() {
    const {
      showModal,
      addToMyShelf,
      categoryName,
      isDublicate,
      bookInfo: { bookName, bookImage, author, description },
    } = this.props;
    console.log("isDublicateItem -> ", isDublicate);
    const errorStyle = isDublicate === bookName ? "error" : "";
    return (
      <div className={errorStyle}>
        <div className="bookInfo">
          <img
            src={bookImage}
            alt="Background"
            onClick={() => {
              showModal(bookName, author, description);
            }}
          />
          <div className="button">
            <Button onClick={() => addToMyShelf(bookName, categoryName)} />
          </div>
        </div>
      </div>
    );
  }
}

export default Book;
