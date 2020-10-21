import React, { useState, useEffect } from 'react';
import Contact from '../layout/Contact';
import Hero from '../layout/Hero';
import Movie from '../movies/Movie';
import Show from '../shows/Show';
import axios from 'axios';


const Home = () => {

  const [movies, setMovies] = useState([])
  const [shows, setShows] = useState([])

  const movie_db_key = process.env.REACT_APP_MOVIE_DB_KEY;

  const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${movie_db_key}&language=en-US&page=1`;

  const fetchPopularMovies = async (url) => {
    const response = await axios.get(url);
    const res = response.data.results
    res.filter((r) => r['poster_path'] !== null);
    setMovies(res.filter((r) => r['poster_path'] !== null));
  }

  const showsUrl = `https://api.themoviedb.org/3/tv/airing_today?api_key=${movie_db_key}&language=en-US`;

  const fetchLatestShows = async (url) => {
    const response = await axios(url);
    const res = response.data.results;
    setShows(res.filter((r) => r['poster_path'] !== null));
  }

  useEffect(() => {
    fetchPopularMovies(url);
    fetchLatestShows(showsUrl);
  }, [url, showsUrl])

  return (
    <>
      <Hero />
      {/* latest movies will be moved to a new component */}
      <main className="bg-primary mb-4">
        <h1 className='ta-center text-white pt-4 pb-2 sub-heading' style={{ borderBottom: '2px solid var(--white)' }}>New Releases</h1>
        <div className="container grid grid-col-4 gap-1 py-2">
          {movies.map((movie) => <Movie key={movie.id} movie={movie} />)}
        </div>
      </main>
      {/* newest TV Shows will be moved to a new component */}
      <main className="bgColor mb-4">
        <h1 className="ta-center text-secondary pt-4 pb-2 sub-heading" style={{ borderBottom: '2px solid var(--secondary)' }}>Latest Shows</h1>
        <div className="container grid grid-col-4 gap-1 py-2">
          {shows.map((show) => <Show key={show.id} show={show} />)}
        </div>
      </main>
      <Contact />
    </>
  )
}

export default Home;
