import React, { useReducer } from 'react';
import axios from 'axios';
import ShowContext from './showContext';
import ShowReducer from './showReducer';

import { SEARCH_SHOWS, GET_LATEST_SHOWS, SET_SHOW, GET_SHOW, SET_LOADING } from '../types';


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
    const response = await axios.get(`https://api.themoviedb.org/3/tv/latest?api_key=${process.env.REACT_APP_MOVIE_DB_KEY}&language=en-US`);
    const data = response.data.results;
    console.log(data)
    dispatch({ type: GET_LATEST_SHOWS, payload: data });
  }

  //fetch most popular movies
  const fetchPopularShows = async () => {
    const response = await axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_MOVIE_DB_KEY}`);
    const data = response.data.results;
    console.log(data);
    dispatch({ type: SEARCH_SHOWS, payload: data });
  }

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
      }}
    >
      {props.children}
    </ShowContext.Provider>
  )
}

export default ShowState;