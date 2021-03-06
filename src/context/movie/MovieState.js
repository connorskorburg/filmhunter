import React, { useReducer } from 'react';
import axios from 'axios';
import MovieContext from './movieContext';
import MovieReducer from './movieReducer';

import { SEARCH_MOVIES, GET_LATEST_MOVIES, SET_MOVIE, SET_LOADING, GET_MOVIE } from '../types';

let key;

process.env.NODE_ENV !== 'production' ? key = process.env.REACT_APP_MOVIE_DB_KEY : key = process.env.MOVIE_DB_KEY

const MovieState = (props) => {
  const initialState = {
    latestMovies: [],
    movies: [],
    movie: {},
    query: '',
    loading: false,
  }

  const [state, dispatch] = useReducer(MovieReducer, initialState);


  // Fetch Movies Now Playing
  const fetchLatestMovies = async () => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${key}& language=en-US&page=1`);
    const data = response.data.results.filter((r) => r['poster_path'] !== null);
    dispatch({ type: GET_LATEST_MOVIES, payload: data })
  }

  // Fetch Most Popular Movies
  const fetchPopularMovies = async () => {
    const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${key}`);
    const data = response.data.results.filter((r) => r['poster_path'] !== null);
    dispatch({ type: SEARCH_MOVIES, payload: data })
  }

  // Search for movie 
  const searchMovie = async (movie) => {
    const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${movie}&page=1&include_adult=false`)
    const data = response.data.results.filter((r) => r['poster_path'] !== null);
    dispatch({ type: SEARCH_MOVIES, payload: data })
  }

  // Set Movie Query  
  const setQuery = (query) => dispatch({ type: SET_MOVIE, payload: query })

  //get movie by id 
  const getMovie = async (id) => {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`);
      const data = response.data;
      dispatch({ type: GET_MOVIE, payload: data });
    } catch (error) {
      dispatch({ type: GET_MOVIE, payload: false });
    }
  }

  //set loading
  const setLoading = () => dispatch({ type: SET_LOADING })



  return (
    <MovieContext.Provider
      value={{
        latestMovies: state.latestMovies,
        movies: state.movies,
        movie: state.movie,
        query: state.query,
        loading: state.loading,
        fetchLatestMovies,
        fetchPopularMovies,
        searchMovie,
        setQuery,
        setLoading,
        getMovie,
      }}
    >
      {props.children}
    </MovieContext.Provider>
  )

}

export default MovieState;