import React from 'react';

const Navbar = () => {
  return (
    <nav className='shadow-3 bg-primary top-nav flex'>
      <h1 className='text-secondary-light'>Film Hunter</h1>
      <section className="flex-inline text-white font-bold ml-auto">
        <p className='ml-2'>Home</p>
        <p className='ml-2'>Movies</p>
        <p className='ml-2'>TV Shows</p>
      </section>
    </nav>
  )
}

export default Navbar;