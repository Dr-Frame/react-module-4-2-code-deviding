import axios from 'axios';
import React, { Component } from 'react';

class BookDetailsView extends Component {
  state = {
    descr: null,
    genre: null,
    id: null,
    imgUrl: null,
    title: null,
    author: null,
  };

  componentDidMount() {
    const { bookId } = this.props.match.params;

    axios
      .get(`http://localhost:4040/books/${bookId}?_expand=author`)
      .then(({ data }) => {
        console.log(data);
        this.setState({
          ...data,
        });
      });
  }

  handleGoBack = () => {
    const { location, history } = this.props;

    //если пользователь сразу зайдет с этой страницы, стейта не будет, андефайнд, будет ошибка.

    //старый метод фикса
    /* if (location.state && location.state.from) {
      return history.push(location.state.from);
    }
    history.push('/library'); */

    //новый метод 2020
    history.push(location?.state?.from || '/library');
  };

  render() {
    const { bookId } = this.props.match.params;
    const { title, descr, genre, imgUrl: url } = this.state;

    //ИСТОРИЯ
    //в пропсах history есть метод push(), replace()
    return (
      <>
        <div className="container-fluid">
          <button type="button" onClick={this.handleGoBack}>
            Go Back
          </button>
          <h1>Book page {bookId}</h1>
          {this.state.author && <p>Автор: {this.state.author.name}</p>}
          <h2>{title}</h2>
          <p>Жанр: {genre}</p>
          <img src={url} alt="book"></img>
          <p>описание: {descr}</p>
        </div>
      </>
    );
  }
}

export default BookDetailsView;
