import React from 'react';

const Movie = ({ show: { id, original_name, poster_path, first_air_date } }) => {

  const hoverImg = (id) => {
    document.querySelector(`.card-${id} h3`).style.display = 'block';
    document.querySelector(`.card-${id} h4`).style.display = 'block';
    document.querySelector(`.card-${id}`).style.backgroundColor = '#fff';
    document.querySelector(`.poster-img-${id}`).style.opacity = '0.3';
  }

  const hoverImgClose = (id) => {
    document.querySelector(`.card-${id} h3`).style.display = 'none';
    document.querySelector(`.card-${id} h4`).style.display = 'none';
    document.querySelector(`.card-${id}`).style.backgroundColor = '#114b5f';
    document.querySelector(`.poster-img-${id}`).style.opacity = '1';
  }

  return (
    <div className={`card bg-primary card-${id}`} onMouseEnter={() => hoverImg(id)} onMouseLeave={() => hoverImgClose(id)}>
      <article className='card-content'>
        <div className="card-content-inner" style={{ zIndex: '100' }}>
          <h3 className='ta-center info'>{original_name}</h3>
          <h4 className='ta-center mt-1 info'>Relased: {first_air_date}</h4>
        </div>
      </article>
      <img className={`poster-img poster-img-${id}`} src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt={original_name} />
    </div>
  )
}

export default Movie;