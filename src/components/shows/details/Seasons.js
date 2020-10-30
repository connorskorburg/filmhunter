import React, { Fragment } from 'react'

const Seasons = ({ seasons }) => {
  const checkSeasons = (seasons) => {
    if (seasons !== undefined) {
      if (seasons.length > 0) {
        return seasons;
      }
    }
    else {
      return false;
    }
  }
  return (
    <Fragment>
      {checkSeasons(seasons) !== false ? (
        <article className='card mb-1 shadow-4 bg-primary-light b-dotted-primary'>
          {seasons.map((s) => {
            return (
              <div className='bg p-1 mb-2 b-dotted-primary' key={s.id}>
                <p className="text-head text-primary font-bold">{s.name}</p>
                <p className="my-1 text-head-m text-secondary">{s.overview}</p>
                <p className='btn text-white font-l bg-secondary'>{s.episode_count} {s.episode_count > 1 ? 'Episodes' : 'Episode'}</p>
              </div>
            )
          })}
        </article>
      ) : (
          ''
        )}
    </Fragment>
  )
}

export default Seasons
