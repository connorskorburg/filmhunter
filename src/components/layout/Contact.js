import React from 'react';
import github from '../layout/images/github.svg';
import linkedin from '../layout/images/linkedin.svg';


const Contact = () => {
  return (
    <main className='bg-primary'>
      <h2 className="sub-heading text-white py-3 ta-center" style={{ borderBottom: '2px solid var(--white)' }}>Contact</h2>
      <div className="container flex py-2 just-around">
        <a href="https://github.com/connorskorburg">
          <img src={github} alt="Github Link" />
        </a>
        <a href="https://linkedin/in/connor-skorburg">
          <img src={linkedin} alt="Linkedin Link" />
        </a>
      </div>
    </main>
  )
}

export default Contact;