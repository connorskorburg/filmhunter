import React, { useState, useEffect } from 'react';
import Show from './Show';
import axios from 'axios';

const LatestShows = () => {

  const [shows, setShows] = useState([])

  const movie_db_key = process.env.REACT_APP_MOVIE_DB_KEY;

  const url = `https://api.themoviedb.org/3/tv/airing_today?api_key=${movie_db_key}&language=en-US`;

  const fetchLatestShows = async (url) => {
    const response = await axios(url);
    const res = response.data.results;
    setShows(res.filter((r) => r['poster_path'] !== null));
  }

  useEffect(() => {

    fetchLatestShows(url);
  }, [url])

  return (
    <main className="bgColor mb-4">
      <h1 className="ta-center text-secondary pt-4 pb-2 sub-heading" style={{ borderBottom: '2px solid var(--secondary)' }}>Latest Shows</h1>
      <div className="container grid grid-col-4 gap-1 py-2">
        {shows.map((show) => <Show key={show.id} show={show} />)}
      </div>
    </main>
  )
}

export default LatestShows;