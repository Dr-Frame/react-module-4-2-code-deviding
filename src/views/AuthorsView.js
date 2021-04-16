import React, { Component } from 'react';
import axios from 'axios';
import { NavLink, Route } from 'react-router-dom';
import BookList from '../components/BookList';

class AuthorsView extends Component {
  state = {
    authors: [],
  };

  async componentDidMount() {
    const response = await axios.get(
      'http://localhost:4040/authors?_embed=books',
    );
    console.log(response.data);

    this.setState({
      authors: response.data,
    });
  }

  render() {
    const { match } = this.props;

    // используем match.url для вложенной навигации
    // используем match.path для создания вложенных маршрутов

    return (
      <>
        <ul>
          {this.state.authors.map(author => (
            <li key={author.id}>
              <NavLink to={`${match.url}/${author.id}`}>{author.name}</NavLink>
            </li>
          ))}
        </ul>

        {/* как перекидывать пропы */}

        <Route
          path={`${match.path}/:authorId`}
          render={props => {
            console.log(props);

            const id = Number(props.match.params.authorId);
            const author = this.state.authors.find(author => author.id === id);

            return author && <BookList {...props} books={author.books} />;
          }}
        />
      </>
    );
  }
}

export default AuthorsView;
