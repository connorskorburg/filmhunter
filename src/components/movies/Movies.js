import React, { useEffect, useContext } from 'react';
import MovieItem from './MovieItem';
import MovieContext from '../../context/movie/movieContext';
import Loading from '../layout/Loading';

const Movies = () => {

  const movieContext = useContext(MovieContext);

  const { fetchPopularMovies, movies, searchMovie, query, setQuery, loading, setLoading } = movieContext;

  useEffect(() => {
    if (query !== '') {
      setLoading();
      searchMovie(query);
    } else {
      setLoading();
      fetchPopularMovies();
    }
    //eslint-disable-next-line
  }, [])

  console.log({ movies });

  const handleChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading();
    if (query === '') {
      fetchPopularMovies();
    } else {
      searchMovie(query);
      setQuery('');
    }
  }

  let content;

  if (loading) {
    content = <Loading />;
  } else if (movies.length === 0) {
    content = <div className="container pt-4">
      <h1 className='ta-center text-head text-primary'>No Results Found!</h1>
    </div>
  } else {
    content = <div className="container grid grid-col-4 gap-1 py-2">
      {movies.map((movie) => <MovieItem key={movie.id} movie={movie} />)}
    </div>
  }

  return (
    <main className="bgColor pt-2">
      <h1 className='ta-center text-secondary pt-4 pb-2 sub-heading' style={{ borderBottom: '2px solid var(--secondary)' }}>Find Films</h1>
      <form handleSubmit={(e) => handleSubmit(e)} style={{ padding: '0 5%' }} >
        <input style={inputStyle} className='mt-2' type="text" placeholder='Search...' value={query} onChange={(e) => handleChange(e)} />
        <button className="mt-2 btn btn-block btn-primary">Search</button>
      </form>
      { content}
    </main>
  )
}

const inputStyle = {
  display: 'block',
  width: '100%',
  padding: '0.5rem',
  borderRadius: '0.15rem',
  fontSize: '1rem',
  border: '2px solid #ccc',
}

export default Movies;