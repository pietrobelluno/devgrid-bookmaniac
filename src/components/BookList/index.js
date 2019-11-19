import React, { Component } from "react";
import axios from "axios";

class BookList extends Component {
  constructor() {
    super();
    var month = new Date().getMonth() + 1;
    this.state = {
      books: [],
      livrosLidos: [],
      month
    };
  }
  componentDidMount() {
    this.getBooks();
  }

  getBooks() {
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=javascript`)
      .then(res => {
        console.log(res.data.items[0].volumeInfo.title);
        this.setState({ books: [...res.data.items] });
      })
      .catch(err => {
        console.log(err);
      });
  }

  updateArrayLivros = ({ target }) => {
    console.log(target);
    const livro = {
      id: target.id,
      nome: target.getAttribute("nome"),
      mes: target.getAttribute("mes")
    };
    console.log(livro);
    this.state.livrosLidos.push(livro);
    console.log(this.state.livrosLidos);

    localStorage.setItem("livrosLidos", JSON.stringify(this.state.livrosLidos));
    console.log(localStorage.getItem("livrosLidos"));
  };

  render() {
    return (
      <div>
        {this.state.books.map((book, i) => {
          return (
            <li>
              <input
                type="checkbox"
                mes={this.state.month}
                nome={book.volumeInfo.title}
                id={i}
                onChange={this.updateArrayLivros}
              />
              {book.volumeInfo.title}
            </li>
          );
        })}
      </div>
    );
  }
}

export default BookList;
