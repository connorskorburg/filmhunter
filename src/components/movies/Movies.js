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


  const onChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  }

  const onClick = (e) => {
    e.preventDefault();
    setLoading();
    searchMovie(query);
  }

  let content;

  if (loading) {
    content = <Loading />;
  } else {
    content = <div className="container grid grid-col-4 gap-1 py-2">
      {movies.map((movie) => <MovieItem key={movie.id} movie={movie} />)}
    </div>
  }

  return (
    <main className="bgColor pt-2">
      <h1 className='ta-center text-secondary pt-4 pb-2 sub-heading' style={{ borderBottom: '2px solid var(--secondary)' }}>Find Films</h1>
      <div style={{ padding: '0 5%' }} >
        <input style={inputStyle} className='mt-2' type="text" placeholder='Search...' value={query} onChange={(e) => onChange(e)} />
        <button className="mt-2 btn btn-block btn-primary" onClick={(e) => onClick(e)}>Search</button>
      </div>
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