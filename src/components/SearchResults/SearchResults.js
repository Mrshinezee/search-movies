import React, { useState} from 'react'
import PropTypes from 'prop-types'
import ReactHtmlParser from 'react-html-parser';

import Loader from '../Loader'


import './SearchResults.css'


const SearchResults = ({isLoading, error, data }) => {
  const [seasonSelect, setSeason] = useState({ sess: 1,});
  let filteredSeason = [];
  let { episodes } = data._embedded;
  const seasons = []

  episodes.forEach((episode) => {
    const { season } = episode

    if(seasons[season]) {
        seasons[season].push(episode)
    } else {
        seasons[season] = [episode]
    }
  })

  console.log(Object.keys(seasons))

  const handleSelectSeason = (evt) => {
    const value = evt.target.value;
    setSeason({
        ...seasonSelect,
        sess: value
    });
}


//   let unique = [...new Set(episodes.map(item => item.season))];
//   unique.forEach(season => {
//       let selectedSeason = episodes.filter(epi => epi.season === season);
//       filteredSeason.push(filteredSeason[`season ${season}`] = selectedSeason);
// });
  let movieDetailsList = []

  if (isLoading) {
    return (
      <div className='search-results__loading'>
        <Loader />
      </div>
    )
  }

  if (!isLoading && !error && data) {
    //   movieDetailsList = episodes.map(episode => (
    //     <MovieCard key={episode.id} episode={episode} />
    //   ))
  }

  if (error) {
    return (
      <div className='search-results__none'>
        No Results Found
      </div>
    )
  }

  return (
    <div className="search__container">
        <div className="search__result__container container">
            <div className="row">
                <div className="col-sm-4 col-xs-12 text-center">
                    { data.image ? <img
                    className="tit-card-img-top"
                    src={data && data.image ? data.image.medium : ''}
                    alt="search preview"
                    />
                    : <div className="card-no-img"> No preview image</div>
                    }   
                </div>
                <div className="col-sm-8 col-xs-12">
                    <h3>{data.name}</h3>
                    <h5 className="text-success">Description:</h5>
                    <h6>{data.summary && ReactHtmlParser(data.summary)}</h6>
                    <h6><span className="text-success">Country: </span>{data.language}</h6>
                    <h6><span className="text-success">Status: </span>{data.status}</h6>
                    <h6><span className="text-success">Genres: </span>{data.genres.join(', ')}</h6>
                    <div className="m-1"><span className="text-success">SEASON: </span>
                        <select value={seasonSelect.sess} onChange={handleSelectSeason}>
                                    {Object.keys(seasons).map((sea, index) => <option key={index} value={sea}>{`season ${sea}`}</option>)}
                                </select>
                    </div>
                </div>
            </div>

<div className="container">
<h3 className="text-success"> Season {seasonSelect.sess}</h3>
<table className="table m-2 overflow-auto">
  <thead className="bg-success">
    <tr>
      <th scope="col">Episode</th>
      <th scope="col">Name</th>
      <th scope="col">Link</th>
    </tr>
  </thead>
  <tbody>
  {seasons[seasonSelect.sess].map((episode, index) =>
    <tr key={index}>
      <th scope="row">{episode.number}</th>
      <td>{episode.name}</td>
      <td><a className="text-success" href={episode.url}> {episode.url} </a></td>
    </tr>
    )}
  </tbody>
</table>
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