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
    case GET_SHOW:
      return {
        ...state,
        show: action.payload,
        loading: false,
      }
    case SET_SHOW:
      return {
        ...state,
        query: action.payload,
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