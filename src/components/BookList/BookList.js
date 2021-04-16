import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import BookPreview from '../BookPreview';
import './BookList.scss';

//что бы получить доступ к пропсам компонента который не рендерится Route
//нужно с реакт роутер дома взять withRouter
//
const BookList = ({ books, location }) => {
  return (
    <ul className="BookList">
      {books.map(({ id, imgUrl, title }) => {
        return (
          <li key={id}>
            <Link
              to={{
                pathname: `/library/${id}`,
                state: {
                  from: location,
                },
              }}
              /* to={`/library/${id}`} */
            >
              <BookPreview imgUrl={imgUrl} title={title} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default withRouter(BookList);
