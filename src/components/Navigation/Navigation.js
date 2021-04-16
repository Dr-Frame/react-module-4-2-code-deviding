import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';

const Navigation = () => {
  return (
    <ul>
      <li>
        <NavLink
          exact
          to={routes.home}
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={routes.authors}
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Authors
        </NavLink>
      </li>
      <li>
        <NavLink
          to={routes.library}
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Library
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
