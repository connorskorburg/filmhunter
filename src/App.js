import React, { useEffect } from 'react';
import './index.css';
import axios from 'axios';


function App() {

  const movie_db_key = process.env.REACT_APP_MOVIE_DB_KEY;
  // const omdb_key = process.env.REACT_APP_OMDB_KEY;

  // Get movie by ID
  // const url = `https://api.themoviedb.org/3/movie/337401?api_key=${movie_db_key}&language=en-US`

  // Get most popular movies
  // const url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${movie_db_key}`

  //Get most popular TV Shows
  // const url = `https://api.themoviedb.org/3/tv/popular?api_key=${movie_db_key}`

  // Get TV Show by ID
  const url = `https://api.themoviedb.org/3/tv/62286?api_key=${movie_db_key}&language=en-US`


  const fetchPopularMovies = async (url) => {
    const response = await axios.get(url);
    console.log(response.data);
  }

  useEffect(() => {
    fetchPopularMovies(url);
  }, [url])


  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
