import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './SearchForm.css'

const WAIT_INTERVAL = 600

class SearchForm extends Component {
  constructor(props) {
    super(props)
        this.state = {
            movieName: '',
          }

    this.handleTextChange = this.handleTextChange.bind(this)
  }

  componentWillMount() {
    this.timer = null
  }

  handleTextChange(event) {
    const { searchMovie } = this.props
    this.setState({
        movieName: event.target.value
      });

    clearTimeout(this.timer)
      let movie = event.target.value
      this.timer = setTimeout(() => {
        searchMovie(movie)
      }, WAIT_INTERVAL)
  }

  render() {
    const { movieName } = this.state;

    return (
      <div className='search-form'>
        <input
          type='search'
          name='keyword'
          value={movieName}
          onChange={this.handleTextChange}
          placeholder='quick search'
          className='search-form__field'
        />
      </div>
    )
  }
}

SearchForm.propTypes = {
  searchMovie: PropTypes.func.isRequired,
}

export default SearchForm
