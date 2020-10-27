import React from 'react'
import { Link } from 'react-router-dom';

const ShowItem = ({ show: { id, original_name, first_air_date, poster_path } }) => {

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
    <Link to={`/shows/${id}`} className={`card bg-secondary card-${id}`} onMouseEnter={() => hoverImg(id)} onMouseLeave={() => hoverImgClose(id)}>
      <article className="card-content">
        <div className="card-content-inner" style={{ zIndex: '100' }}>
          <h3 className="ta-center info">{original_name}</h3>
          <h4 className="ta-center mt-1 info">First Aired: {first_air_date}</h4>
        </div>
      </article>
      <img className={`poster-img poster-img-${id}`} src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt={original_name} />
    </Link>
  )
}
//https://api.themoviedb.org/3/tv/{tv_id}/images?api_key=6e4919c43a2a6cc26be930905b8a4858&language=en-US

export default ShowItem
