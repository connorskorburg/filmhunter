import React from 'react'

const Home = () => {
  return (
    <div className='container flex' style={containerStyle} >
      <section className="w-50 pr-2" style={sectionStyle}>
        <h1 className='text-primary heading mb-2'>Find Your Favorite Films and Shows</h1>
        <p className="info text-primary-dark font-bold mb-1">Search for most popular and latest Movies and Television shows</p>
        <div className="btn-container">
          <button className="btn btn-secondary mr-1">Movies</button>
          <button className="btn btn-primary">TV Shows</button>
        </div>
      </section>
      <section className='w-50'>
        <p></p>
      </section>
    </div>
  )
}

const containerStyle = {
  position: 'relative',
  height: '100vh'
}

const sectionStyle = {
  width: '50%',
  height: 'fit-content',
  overflow: 'hidden',
  margin: 'auto 0',
  position: 'absolute',
  top: '0',
  bottom: '60px',
  right: '0',
  left: '0',

}

export default Home;
