import API from '../api'
import {
    SEARCH_MOVIE,
    SEARCH_MOVIE_SUCCESS,
    SEARCH_MOVIE_ERROR,
    SET_WORD,
  } from '../constants';

  export const setMovieSearch = quickSearch => ({
    type: SET_WORD,
    quickSearch
  })

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
      console.log('view api',API(movies) )
    dispatch(searchingMovieRequest());
    API(movies)
    .then(selected => {
        console.log('selected', selected.data )
        dispatch(searchMovieSuccess(selected.data));
      })
      .catch(error => {
        dispatch(searchMovieError(error));
      });

  };
