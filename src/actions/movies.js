import API from '../api'
import {
    SEARCH_MOVIE,
    SEARCH_MOVIE_SUCCESS,
    SEARCH_MOVIE_ERROR,
  } from '../constants';

  const searchingMovieRequest = () => ({
    type: SEARCH_MOVIE,
  });
  
  const searchMovieSuccess = movie => ({
    type: SEARCH_MOVIE_SUCCESS,
    movie,
  });
  
  const searchMovieError = error => ({
    type: SEARCH_MOVIE_ERROR,
    error,
  });

  export const searchingMovies = (movies) => dispatch => {
    dispatch(searchingMovieRequest());
    API(movies)
    .then(selected => {
        console.log('selected', selected )
        dispatch(searchMovieSuccess(selected.data.coin));
      })
      .catch(error => {
        dispatch(searchMovieError(error));
      });

  };