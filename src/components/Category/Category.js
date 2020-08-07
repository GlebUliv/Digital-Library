import React, { Component } from "react";
import style from "./Category.module.css";
import Book from "../Book/Book";

class Category extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       books: [],
  //       myShelf: {
  //         categoryName: "",
  //         bookName: "",
  //       },
  //     };
  //   }
  // state = {
  //   books: [],
  //   myShelf: {
  //     categoryName: [],
  //     bookName: [],
  //   },
  //   test: [],
  // };

  // addToMyShelf = (bookName, categoryName) => {
  //   console.log(bookName, categoryName);
  //    const arr = [];
  //    const asd = this.state.test.concat(bookName);
  //    console.log("asd", asd);
  //    this.setState({
  //      test: asd,
  //    });
  //   // this.setState((prevState) => ({
  //   //   myShelf: {
  //   //     categoryName: [...this.state.myShelf.categoryName, categoryName],
  //   //   },
  //   // }));
  //   // this.setState({
  //   //   myShelf: [...this.state.myShelf, categoryName, bookName],
  //   // });
  // };

  //   changeFieldsState = (field, inputValue) => {
  //     this.setState({
  //       formData: { ...this.state.formData, [field]: inputValue },
  //     });
  //   };

  render() {
    const {
      showModal,
      books,
      categoryName,
      addToMyShelf,
      isDublicate,
    } = this.props;
    // const {
    //   myShelf,
    //   test
    // } = this.state;

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
