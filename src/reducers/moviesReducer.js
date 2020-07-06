import {
  SEARCH_MOVIE,
  SEARCH_MOVIE_SUCCESS,
  SEARCH_MOVIE_ERROR,
  } from '../constants';
  
  export const initialState = {
    data: null,
    isLoading: false,
    error: null,
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case SEARCH_MOVIE:
        return {
          ...state,
          isLoading: true,
          error: null,
        };
      case SEARCH_MOVIE_SUCCESS:
        return {
          ...state,
          data: action.movie,
          isLoading: false,
          error: null,
        };
  
      case SEARCH_MOVIE_ERROR:
        return {
          ...state,
          data: null,
          isLoading: false,
          error: action.error,
        };
  
      default:
        return state;
    }
  };