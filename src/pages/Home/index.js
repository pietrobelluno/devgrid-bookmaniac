import React, { Component } from "react";
import { BookList } from "../../components";
import { Button } from "../../components";
import axios from "axios";
import "./style.scss";
import "../../main.scss";
// import { ReadedBooks } from "../../components";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
      livrosLidos: []
    };
  }
  componentDidMount() {
    this.getBooks();
  }

  getBooks() {
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=reactjs`)
      .then(res => {
        this.setState({ books: [...res.data.items] });
      })
      .catch(err => {
        console.log(err);
      });
  }

  updateArrayLivros = ({ target }) => {
    if (target.checked === true) {
      const livro = {
        id: target.id,
        nome: target.getAttribute("nome"),
        mes: target.getAttribute("mes")
      };
      this.state.livrosLidos.push(livro);
      var livrosLidos = this.state.livrosLidos;
    } else {
      var livrosLidos = this.state.livrosLidos.filter(item => {
        return item.id !== target.id;
      });
    }

    this.setState({
      livrosLidos: livrosLidos
    });

    localStorage.setItem("livrosLidos", JSON.stringify(this.state.livrosLidos));
    console.log(localStorage.getItem("livrosLidos"));
  };

  render() {
    return (
      <div>
        <h1>Book Maniac Test</h1>
        <p>Select the books you've already readed:</p>
        <p>
          In this project i used Google API to get the books about some keyword
          that I pass as a parameter.
        </p>
        <p>
          I save the readed books in Local Storage so if you close the browser
          they will keep saved.
        </p>
        <BookList
          updateArrayLivros={this.updateArrayLivros}
          books={this.state.books}
        />

        {/* <ReadedBooks /> */}
      </div>
    );
  }
}

export default Home;
