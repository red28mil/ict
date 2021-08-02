import SiteHeader from './components/siteHeader';
import MovieReviewPage from "./pages/movieReviewPage";

import React from "react";
import ReactDOM from "react-dom";

import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom";

import FavoriteMoviesPage from "./pages/favoriteMoviesPage"; // NEW

const App = () => {
  return (
    <BrowserRouter>
    <SiteHeader/>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/movies/favorites">Favorites</Link>
        </li>
      </ul>
      <Switch>
      <Route path="/reviews/:id" component={MovieReviewPage}/>
        <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
        <Route path="/movies/:id" component={MoviePage} />
        
        <Route exact path="/" component={HomePage} />
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));