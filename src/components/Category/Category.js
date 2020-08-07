import React, { Component } from "react";
import style from "./Category.module.css";
import Book from "../Book/Book";

class Category extends Component {
  render() {
    const {
      showModal,
      books,
      categoryName,
      addToMyShelf,
      isDublicate,
    } = this.props;

    return (
      //
      <div className={style.categoryName}>
        <h2>{categoryName}</h2>
        <div className={style.picture}>
          {books.map((books) => {
            return (
              <Book
                bookInfo={books}
                showModal={showModal}
                categoryName={categoryName}
                addToMyShelf={addToMyShelf}
                isDublicate={isDublicate}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Category;
