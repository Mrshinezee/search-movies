import React, {useState, useEffect} from "react";
import { connect } from 'react-redux';
import { searchingMovies } from '../actions/movies'

const Search = ({dispatch, data, isLoading}) => {

  const [hasError, setErrors] = useState(false);
  const [ability, setAbility] = useState({});

  useEffect(() => {
      console.log('render');
      dispatch(searchingMovies('merlin'));
  }, [dispatch])


  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://pokeapi.co/api/v2/ability");
      res
        .json()
        .then(res => setAbility(res))
        .catch(err => setErrors(err));
    }
    fetchData();
  })
  return (
    <div className="Search">
        <div className='search__title'>
            <h1>Tvmaze</h1>
        </div>
      <span>{JSON.stringify(ability.results)}</span>
      <hr />
      <span>Has error: {JSON.stringify(hasError)}</span>
    </div>
  );
}

const mapStateToProps = ({
    movies: { data, isLoading },
  }) => ({
    data,
    isLoading,
  });
export default connect(mapStateToProps)(Search);
