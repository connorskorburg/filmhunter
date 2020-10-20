import React from 'react';
import hero from '../layout/images/hero.svg';

const Home = () => {
  return (
    <div className='flex' style={containerStyle} >
      <main style={sectionStyle}>
        <section className="w-50 pr-2" style={{ verticalAlign: 'top' }}>
          <h1 className='text-primary heading mb-2'>Find Your Favorite Films and Shows</h1>
          <p className="info text-primary-dark font-bold mb-1">Search for most popular and latest Movies and Television shows</p>
          <div className="btn-container">
            <button className="btn btn-secondary mr-1">Movies</button>
            <button className="btn btn-primary">TV Shows</button>
          </div>
        </section>
        <section style={heroStyle} className='w-50'>
          <img src={hero} alt="" style={{ width: '85%', marginLeft: '15%', display: 'inline-block' }} />
        </section>
      </main>
    </div>
  )
}

const containerStyle = {
  position: 'relative',
  height: '100vh',
}

const sectionStyle = {
  padding: '100px 5% 0 5%',
  width: '100%',
  height: 'fit-content',
  overflow: 'hidden',
  margin: 'auto 0',
  position: 'absolute',
  top: '0',
  bottom: '100px',
  right: '0',
  left: '0',
}

const heroStyle = {
  flex: '1',
}

export default Home;
