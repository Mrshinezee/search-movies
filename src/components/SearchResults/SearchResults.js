import React from 'react'
import PropTypes from 'prop-types'

import Loader from '../Loader'


import './SearchResults.css'

const MovieCard = ({ episode }) => {
    const { image } = episode;
    return (
     <a href={episode.url}>
       <div className="card">
      { image ? <img
          className="card-img-top"
          src={image ? image.medium : ''}
          alt="Episode Card preview"
        />
        : <div className="card-no-img"> No preview image</div>
      }
        <div className="card-body">
          <h5 className="card-title">{episode.name} ({episode.airdate.split('-')[0]})</h5>
          <h6 className="card-subtitle mb-2 text-muted">Season {episode.season} Episode {episode.number}</h6>
          {/* {episode.summary && ReactHtmlParser(episode.summary)} */}
        </div>
      </div>
     </a>
    );
  }


const SearchResults = ({isLoading, error, data }) => {
//   console.log('display', isLoading, error, data)
  let { episodes } = data._embedded;

  let movieDetailsList = []

  if (isLoading) {
    return (
      <div className='search-results__loading'>
        <Loader />
      </div>
    )
  }

  if (!isLoading && !error && data) {
      movieDetailsList = episodes.map(episode => (
        <MovieCard key={episode.id} episode={episode} />
      ))
  }

  if (data && data.length === 0) {
    return (
      <div className='search-results__none'>
        No Results Found
      </div>
    )
  }
 console.log('data data', data)
  return (
    <div className="search__container">
        <div className="search__result__container">
            <h1>{data.name}</h1>
            <div>
            { data.image ? <img
            className="title-card-img-top"
            src={data && data.image ? data.image.medium : ''}
            alt="search preview"
            />
            : <div className="card-no-img"> No preview image</div>
            }
            </div>
            <div className='search-results'>
            {movieDetailsList}
            </div>
        </div>
    </div>
  )
}

SearchResults.propTypes = {
  movies: PropTypes.shape({
    isLoading: PropTypes.bool.isRequired,
    isError: PropTypes.bool.isRequired,
    data: PropTypes.array,
  }),
}

export default SearchResults