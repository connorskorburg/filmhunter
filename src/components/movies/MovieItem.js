import React from 'react';
import { Link } from 'react-router-dom';

const Movie = ({ movie: { id, original_title, poster_path, release_date } }) => {

  const hoverImg = (id) => {
    document.querySelector(`.card-${id} h3`).style.display = 'block';
    document.querySelector(`.card-${id} h4`).style.display = 'block';
    document.querySelector(`.card-${id}`).style.backgroundColor = '#fff';
    document.querySelector(`.poster-img-${id}`).style.opacity = '0.3';
  }

  const hoverImgClose = (id) => {
    document.querySelector(`.card-${id} h3`).style.display = 'none';
    document.querySelector(`.card-${id} h4`).style.display = 'none';
    document.querySelector(`.card-${id}`).style.backgroundColor = '#1a936f';
    document.querySelector(`.poster-img-${id}`).style.opacity = '1';
  }

  return (
    <Link to={`/movies/${id}`} className={`card bg-secondary card-${id}`} onMouseEnter={() => hoverImg(id)} onMouseLeave={() => hoverImgClose(id)}>
      <article className='card-content'>
        <div className="card-content-inner" style={{ zIndex: '100' }}>
          <h3 className='ta-center info'>{original_title}</h3>
          <h4 className='ta-center mt-1 info'>Relased: {release_date}</h4>
        </div>
      </article>
      <img className={`poster-img poster-img-${id}`} src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt={original_title} />
    </Link>
  )
}

export default Movie;