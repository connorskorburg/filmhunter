import { SEARCH_MOVIES, GET_LATEST_MOVIES, GET_MOVIE, SET_MOVIE } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_LATEST_MOVIES:
      return {
        ...state,
        latestMovies: action.payload
      }
    case SEARCH_MOVIES:
      return {
        ...state,
        movies: action.payload
      }
    case SET_MOVIE:
      return {
        ...state,
        movie: action.payload
      }
    default:
      return state;
  }
}