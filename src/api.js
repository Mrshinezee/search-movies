import axios from 'axios'

const API = ( keyword ) => axios.get('https://api.tvmaze.com/singlesearch/shows/', {
  params: {
    q:keyword,
    embed:'episodes',
  },
})

export default API
