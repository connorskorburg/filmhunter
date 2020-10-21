import React from 'react';
import hero from './images/hero.svg';

const Hero = () => {
  return (
    <div className='flex hero-outer' >
      <main className='hero-inner'>
        <section className="w-50" style={{ verticalAlign: 'top' }}>
          <h1 className='text-primary heading mb-2'>Find Your Favorite Films and Shows</h1>
          <p className="info text-secondary-dark font-bold mb-2">Search for most popular and latest Movies and Television shows</p>
          <div className="btn-container">
            <button className="btn btn-secondary mr-1">Movies</button>
            <button className="btn btn-primary">TV Shows</button>
          </div>
        </section>
        <section style={{ flex: '1' }} className='w-50'>
          <img src={hero} alt="" className='hero-img' />
          <article className="hero-sm">
            <p className="text-secondary-dark font-bold my-2 ta-center font-l">Search for most popular and latest Movies and Television shows</p>
            <button className="btn btn-block btn-secondary mb-1">Movies</button>
            <button className="btn btn-block btn-primary">TV Shows</button>
          </article>
        </section>
      </main>
    </div>
  )
}

export default Hero;