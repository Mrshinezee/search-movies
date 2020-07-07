import React from "react";
import { connect } from 'react-redux';
import { FiTv} from 'react-icons/fi';

import SearchForm from '../../components/SearchForm';
import SearchResults from '../../components/SearchResults';

import { searchingMovies } from '../../actions/movies';

const Search = ({dispatch, search, data, error, isLoading, searchingMovies}) => {

  const SearchMovie = (mov) => {
    searchingMovies(mov)
  }
  return (
    <div className="Search">
        <div className='search__title text-center'>
            <h2 className="align-items-center">
              <span><FiTv className="text-success"/></span>
             TVMAZE MOVIES</h2>
        </div>
      <SearchForm
        keyword={search}
        searchMovie={SearchMovie}
      />
      {data
          && (
          <SearchResults
            keyword={search}
            data={data}
            isLoading={isLoading}
            error={error}
          />
          )
        }
    </div>
  );
}

const mapStateToProps = ({
    movies: { search, data, isLoading, error },
  }) => ({
    search,
    data,
    isLoading,
    error,
  });
export default connect(mapStateToProps,{ searchingMovies })(Search);
