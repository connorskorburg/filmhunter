import { SEARCH_SHOWS, GET_LATEST_SHOWS, SET_SHOW, GET_SHOW, SET_LOADING } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_LATEST_SHOWS:
      return {
        ...state,
        latestShows: action.payload,
        loading: false,
      }
    case SEARCH_SHOWS:
      return {
        ...state,
        shows: action.payload,
        loading: false,
      }
    default:
      return state;
  }
}