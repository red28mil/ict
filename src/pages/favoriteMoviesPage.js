import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "react-query";
import { getMovie } from "../api/tmdb-api";
import Spinner from '../components/spinner';

const FavoriteMoviesPage = () => {
  const {favorites: movieIds } = useContext(MoviesContext);



const favoriteMovieQueries = useQueries(
  movieIds.map((movieId) => {
    return {
      queryKey: ["movie", { id: movieId }],
      queryFn: getMovie,
    };
  })
);
const isLoading = favoriteMovieQueries.find((m) => m.isLoading === true);

if (isLoading) {
  return <Spinner />;
}
const movies = favoriteMovieQueries.map((q) => q.data);
const toDo = () => true;

  return (
    <PageTemplate
      title="Favourite Movies"
      movies={movies}
      selectFavorite={toDo}
    />
  );
};

export default FavoriteMoviesPage;