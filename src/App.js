import React, { useEffect } from 'react';
import './index.css';
import axios from 'axios';
// layout components
import Navbar from './components/layout/Navbar';
//pages
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {

  const movie_db_key = process.env.REACT_APP_MOVIE_DB_KEY;
  // const omdb_key = process.env.REACT_APP_OMDB_KEY;

  // Get movie by ID
  // const url = `https://api.themoviedb.org/3/movie/337401?api_key=${movie_db_key}&language=en-US`

  // Get most popular movies
  // const url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${movie_db_key}`

  //Get now playing movies
  // const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${movie_db_key}&language=en-US&page=1`

  //Get most popular TV Shows
  // const url = `https://api.themoviedb.org/3/tv/popular?api_key=${movie_db_key}`

  // Get TV Show by ID
  // const url = `https://api.themoviedb.org/3/tv/62286?api_key=${movie_db_key}&language=en-US`

  // Get latest TV Shows
  //const url = `https://api.themoviedb.org/3/tv/latest?api_key=${movie_db_key}&language=en-US`


  // const fetchPopularMovies = async (url) => {
  //   const response = await axios.get(url);
  //   console.log(response.data);
  // }

  // useEffect(() => {
  //   fetchPopularMovies(url);
  // }, [url])


  return (
    <Router>
      <div className="App">
        <Navbar />
        <Home />
      </div>
    </Router>
  );
}

export default App;
