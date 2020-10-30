import React from 'react';
import icon from './images/icon.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <main>
      <nav className='shadow-3 bg-primary top-nav flex'>
        <section>
          <img src={icon} alt="" />
          <h1 className='text-secondary-light d-inline-block' style={{ verticalAlign: 'top', marginLeft: '8px' }}>Film Hunter</h1>
        </section>
        <section className="flex-inline text-white font-bold ml-auto nav-right">
          <Link to="/" className='text-m text-white ml-2'>Home</Link>
          <Link to="/movies" className='text-m text-white ml-2'>Movies</Link>
          <Link to="/shows" className='text-m text-white ml-2'>TV Shows</Link>
        </section>
      </nav>
      <nav className="bottom-nav">
        <Link to="/" className='text-m text-white bottom-nav-link'>Home</Link>
        <Link to="/movies" className='text-m text-white bottom-nav-link'>Movies</Link>
        <Link to="/shows" className='text-m text-white bottom-nav-link'>TV Shows</Link>
      </nav>
    </main>
  )
}

export default Navbar;