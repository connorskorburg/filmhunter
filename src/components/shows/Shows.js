import React, { useEffect, useState, useContext } from 'react'
import ShowContext from '../../context/show/showContext';
import Loading from '../layout/Loading';

const Shows = () => {

  const showContext = useContext(ShowContext);

  const { fetchPopularShows } = showContext;

  useEffect(() => {
    // setLoading();
    fetchPopularShows();
    //eslint-disable-next-line
  }, [])

  const handleChange = (e) => {
    e.preventDefault();

  }
  const handleClick = (e) => {
    e.preventDefault();

  }



  return (
    <main className="bgColor pt-2">
      <h1 className='ta-center text-secondary pt-4 pb-2 sub-heading' style={{ borderBottom: '2px solid var(--secondary)' }}>Find TV Shows</h1>
      <div style={{ padding: '0 5%' }} >
        <input style={inputStyle} className='mt-2' type="text" placeholder='Search...' onChange={(e) => handleChange(e)} />
        <button className="mt-2 btn btn-block btn-primary" onClick={(e) => handleClick(e)}>Search</button>
      </div>
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

export default Shows
