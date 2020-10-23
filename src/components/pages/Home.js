import React from 'react';
import Contact from '../layout/Contact';
import Hero from '../layout/Hero';
import LatestMovies from '../movies/LatestMovies';
import LatestShows from '../shows/LatestShows';


const Home = () => {
  return (
    <>
      <Hero />
      <LatestMovies />
      <LatestShows />
      <Contact />
    </>
  )
}

export default Home;
