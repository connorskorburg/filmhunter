import React from 'react';
import icon from './images/icon.svg';

const Navbar = () => {
  return (
    <nav className='shadow-3 bg-primary top-nav flex'>
      <section>
        <img src={icon} alt="" />
        <h1 className='text-secondary-light d-inline-block' style={{ verticalAlign: 'top', marginLeft: '8px' }}>Film Hunter</h1>
      </section>
      <section className="flex-inline text-white font-bold ml-auto nav-right">
        <p className='ml-2'>Home</p>
        <p className='ml-2'>Movies</p>
        <p className='ml-2'>TV Shows</p>
      </section>
    </nav>
  )
}

export default Navbar;