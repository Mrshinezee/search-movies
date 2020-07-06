import React, {useState, useEffect} from "react";
import { connect } from 'react-redux';

import SearchForm from '../../components/SearchForm'

import { setMovieSearch, searchingMovies } from '../../actions/movies'

const Search = ({dispatch, search, data, isLoading, setMovieSearch, searchingMovies}) => {

  const [hasError, setErrors] = useState(false);
  const [ability, setAbility] = useState({});

  // useEffect(() => {
  //     console.log('render');
  //     dispatch(searchingMovies('merlin'));
  // }, [dispatch])

  const SearchMovie = () => {
    searchingMovies(search)
 }
  return (
    <div className="Search">
        <div className='search__title'>
            <h1>Tvmaze</h1>
        </div>
      <SearchForm
        keyword={search}
        setKeyword={setMovieSearch}
        searchMovie={SearchMovie}
      />
      <span>{JSON.stringify(data)}</span>
    </div>
  );
}

const mapStateToProps = ({
    movies: { search, data, isLoading },
  }) => ({
    search,
    data,
    isLoading,
  });
export default connect(mapStateToProps,{ setMovieSearch,searchingMovies })(Search);
