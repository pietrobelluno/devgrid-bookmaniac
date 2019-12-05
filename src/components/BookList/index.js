import React, { Component } from "react";
import "./style.scss";

class BookList extends Component {
  constructor() {
    super();

    const date = new Date();
    const month = date.toLocaleString("en", { month: "long" });

    this.state = {
      month
    };
  }

  render() {
    if (localStorage.getItem("livrosLidos") != null) {
      var arrayLivrosLidos = localStorage.getItem("livrosLidos");

      arrayLivrosLidos = JSON.parse(arrayLivrosLidos);
      var arrayIdsLivrosLidos = [];

      arrayLivrosLidos.map(index => {
        arrayIdsLivrosLidos.push(index.id);
      });
    }

    return (
      <ul className="bookList">
        {this.props.books.map((book, i) => {
          if (localStorage.getItem("livrosLidos") != null) {
            var checked;

            if (arrayIdsLivrosLidos.includes(i.toString())) {
              checked = true;
            } else {
              checked = false;
            }
          }

          return (
            <li>
              <input
                type="checkbox"
                mes={this.state.month}
                nome={book.volumeInfo.title}
                id={i}
                onChange={this.props.updateArrayLivros}
                defaultChecked={checked}
              />
              {book.volumeInfo.title}
              {checked ? <small> - Readed on {this.state.month} </small> : ""}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BookList;
