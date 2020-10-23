import { SEARCH_MOVIES, GET_LATEST_MOVIES, SET_MOVIE, SET_LOADING } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_LATEST_MOVIES:
      return {
        ...state,
        latestMovies: action.payload,
        loading: false,
      }
    case SEARCH_MOVIES:
      return {
        ...state,
        movies: action.payload,
        loading: false,
      }
    case SET_MOVIE:
      return {
        ...state,
        movie: action.payload,
        loading: false,
      }
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      }
    default:
      return state;
  }
}