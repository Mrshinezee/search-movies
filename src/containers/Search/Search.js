import React, {useState, useEffect} from "react";
import { connect } from 'react-redux';

import SearchForm from '../../components/SearchForm';
import SearchResults from '../../components/SearchResults';

import { searchingMovies } from '../../actions/movies';

import './Search.css';

const Search = ({dispatch, search, data, error, isLoading, searchingMovies}) => {

  const [hasError, setErrors] = useState(false);
  const [ability, setAbility] = useState({});

  // useEffect(() => {
  //     console.log('render');
  //     dispatch(searchingMovies('merlin'));
  // }, [dispatch])

  const SearchMovie = (mov) => {
    searchingMovies(mov)
  }
  return (
    <div className="Search">
        <div className='search__title'>
            <h1>TVMAZE MOVIES</h1>
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
      <span>{JSON.stringify(data)}</span>
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
