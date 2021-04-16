import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import HomeView from './views/HomeView';
import AuthorsView from './views/AuthorsView';
import LibraryView from './views/LibraryView';
import NotFoundView from './views/NotFoundView';
import BookDetailsView from './views/BookDetailsView';
import routes from './routes';
import AppBar from './components/AppBar';

//делаем пути нашего сайта,  его страниц
// что бы применить инлайн стили используем не Link, а NavLink

/* const linkStyles = {
  base: {
    color: 'black',
  },
  active: {
    color: 'red',
  },
};

<NavLink to="/" style={linkStyles.base} activeStyle={linkStyles.active}></NavLink> */

const App = () => (
  <>
    <AppBar />
    {/* ищет до первого свовпадения и рендерит компонент */}
    <Switch>
      <Route exact path={routes.home} component={HomeView} />

      <Route path={routes.authors} component={AuthorsView} />
      {/* динамический маршрут, после/ можно ставить что угодно, это просто будет свойством */}
      <Route path={routes.bookDetails} component={BookDetailsView} />
      <Route path={routes.library} component={LibraryView} />
      <Route component={NotFoundView} />
    </Switch>
  </>
);

export default App;
