import React, { Component } from "react";
import style from "./BookList.module.css";
import { data } from "../data";
import Category from "../Category/Category";

class BookList extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
      myShelf: {
        categoryName: [],
        bookNames: [],
      },
      isDublicateItem: "",
    };
  }

  componentDidMount() {
    this.setState({ books: data });
  }

  setErrorContaiber = (item) => {
    this.setState({ isDublicateItem: item });
    setTimeout(() => {
      this.setState({ isDublicateItem: "" });
    }, 2000);
  };

  addToMyShelf = (bookNames, categoryName) => {
    const unique = (value, index, self) => {
      return self.indexOf(value) === index;
    };

    this.state.myShelf.bookNames.filter((item) => {
      const isDublicate = item.indexOf(bookNames) > -1;
      if (isDublicate) {
        this.setErrorContaiber(item);
      }
    });

    this.setState(
      {
        myShelf: {
          categoryName: [...this.state.myShelf.categoryName, categoryName],
          bookNames: [...this.state.myShelf.bookNames, bookNames],
        },
      },
      () => {
        const categoryName = this.state.myShelf.categoryName.filter(unique);
        const bookNames = this.state.myShelf.bookNames.filter(unique);
        this.setState({
          myShelf: { categoryName, bookNames },
        });
      }
    );
  };

  renderMyShelf = (categories) => {
    const {
      books,
      myShelf: { bookNames },
    } = this.state;

    const myShelf = categories.map((oneCat) => {
      const asd = books.map((bookProps) => {
        const { categoryName, books } = bookProps;
        if (oneCat === categoryName) {
          const content = books.map((dataBooks) => {
            const { bookName, bookImage } = dataBooks;
            return bookNames.map((myBooks) => {
              if (myBooks === bookName) {
                return (
                  <div className={style.myShelf}>
                    <div>{bookName}</div>
                    <img src={bookImage} alt="someImage" />
                  </div>
                );
              }
            });
          });

          return (
            <div>
              <h1>{oneCat}</h1>
              {content}
            </div>
          );
        }
      });

      return asd;
    });

    return myShelf;
  };

  render() {
    const { showModal } = this.props;
    const {
      books,
      isDublicateItem,
      myShelf: { categoryName },
    } = this.state;
    return (
      <div className={style.list}>
        <h1>CHECK OUR BOOKS</h1>
        <div className={style.main}>
          {books.map((bookProps, index) => {
            const { categoryName, books } = bookProps;
            return (
              <Category
                categoryName={categoryName}
                books={books}
                key={index}
                showModal={showModal}
                addToMyShelf={this.addToMyShelf}
                isDublicate={isDublicateItem}
              />
            );
          })}
        </div>
        <h1 className={style.ourShelf}>MY SHELF</h1>
        {this.renderMyShelf(categoryName)}
      </div>
    );
  }
}

export default BookList;
