import React, { useEffect, useContext } from 'react';
import MovieItem from './MovieItem';
import MovieContext from '../../context/movie/movieContext';
import Loading from '../layout/Loading';

const LatestMovies = () => {

  const movieContext = useContext(MovieContext);

  const { fetchLatestMovies, latestMovies, loading, setLoading } = movieContext;

  useEffect(() => {
    setLoading();
    fetchLatestMovies();
    //eslint-disable-next-line
  }, [])

  let content;

  if (loading) {
    content = <Loading />
  } else {
    content = <div className="container grid grid-col-4 gap-1 py-2">
      {latestMovies.map((movie) => <MovieItem key={movie.id} movie={movie} />)}
    </div>
  }

  return (
    <main className="bg-primary mb-4">
      <h1 className='ta-center text-white pt-4 pb-2 sub-heading' style={{ borderBottom: '2px solid var(--white)' }}>New Releases</h1>
      {content}
    </main>
  )
}

export default LatestMovies;