import React, { useEffect, useContext } from 'react';
import Movie from './Movie';
import MovieContext from '../../context/movie/movieContext';

const LatestMovies = () => {

  const movieContext = useContext(MovieContext);

  const { fetchLatestMovies, latestMovies } = movieContext;

  useEffect(() => {
    fetchLatestMovies();
  }, [])

  return (
    <main className="bg-primary mb-4">
      <h1 className='ta-center text-white pt-4 pb-2 sub-heading' style={{ borderBottom: '2px solid var(--white)' }}>New Releases</h1>
      <div className="container grid grid-col-4 gap-1 py-2">
        {latestMovies.map((movie) => <Movie key={movie.id} movie={movie} />)}
      </div>
    </main>
  )
}

export default LatestMovies;