import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BookList from '../components/BookList';

class LibraryView extends Component {
  state = {
    books: [],
  };

  async componentDidMount() {
    const response = await axios.get('http://localhost:4040/books');

    this.setState({
      books: response.data,
    });
  }

  // используем match.url для вложенной навигации
  // используем match.path для создания вложенных маршрутов

  render() {
    return (
      <>
        <div className="container-fluid">
          <BookList books={this.state.books} />
        </div>
      </>
    );
  }
}

export default LibraryView;
