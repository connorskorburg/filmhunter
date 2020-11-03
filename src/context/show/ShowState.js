import React, { useReducer } from 'react';
import axios from 'axios';
import ShowContext from './showContext';
import ShowReducer from './showReducer';

import { SEARCH_SHOWS, GET_LATEST_SHOWS, SET_SHOW, GET_SHOW, SET_LOADING } from '../types';

let key;

process.env.NODE_ENV !== 'production' ? key = process.env.REACT_APP_MOVIE_DB_KEY : key = process.env.MOVIE_DB_KEY

console.log(process.env.NODE_ENV)

const ShowState = (props) => {
  const initialState = {
    latestShows: [],
    shows: [],
    show: {},
    query: '',
    loading: false,
  }

  const [state, dispatch] = useReducer(ShowReducer, initialState);

  //fetch latest TV Shows 
  const fetchLatestShows = async () => {
    const response = await axios.get(`https://api.themoviedb.org/3/tv/airing_today?api_key=${key}&language=en-US`);
    const data = response.data.results.filter((r) => r['poster_path'] !== null);
    dispatch({ type: GET_LATEST_SHOWS, payload: data });
  }

  //fetch most popular movies
  const fetchPopularShows = async () => {
    const response = await axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${key}`);
    const data = response.data.results.filter((r) => r['poster_path'] !== null);
    dispatch({ type: SEARCH_SHOWS, payload: data });
  }

  //fetch show by ID
  const getShow = async (id) => {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=${key}&language=en-US`)
      const data = response.data;
      dispatch({ type: GET_SHOW, payload: data });
    } catch (error) {
      dispatch({ type: GET_SHOW, payload: false })
    }
  }

  //query for show 
  const searchShow = async (query) => {
    const response = await axios.get(`https://api.themoviedb.org/3/search/tv?api_key=${key}&language=en-US&page=1&query=${query}&include_adult=false`);
    const data = response.data.results;
    dispatch({ type: SEARCH_SHOWS, payload: data });
  }

  //set movie query
  const setQuery = (query) => dispatch({ type: SET_SHOW, payload: query })

  //set loading 
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <ShowContext.Provider
      value={{
        latestShows: state.latestShows,
        shows: state.shows,
        show: state.show,
        query: state.query,
        loading: state.loading,
        fetchLatestShows,
        fetchPopularShows,
        setLoading,
        setQuery,
        searchShow,
        getShow,
      }}
    >
      {props.children}
    </ShowContext.Provider>
  )
}

export default ShowState;