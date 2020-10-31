import React, { useEffect, useContext } from 'react';
import ShowItem from './ShowItem'
import Loading from '../layout/Loading';
import ShowContext from '../../context/show/showContext';

const LatestShows = () => {
  const showContext = useContext(ShowContext);

  const { fetchLatestShows, latestShows, loading, setLoading } = showContext;

  useEffect(() => {
    setLoading();
    fetchLatestShows();
    //eslint-disable-next-line
  }, [])

  let content;

  if (loading) {
    content = <Loading />
  } else {
    content = (
      <div className="container grid grid-col-4 gap-1 py-2">
        {latestShows.map((show) => <ShowItem key={show.id} show={show} />)}
      </div>
    )
  }

  return (
    <main className="bgColor mb-4">
      <h1 className="ta-center text-secondary pt-4 pb-2 sub-heading" style={{ borderBottom: '2px solid var(--secondary)' }}>Latest Shows</h1>
      {content}
    </main>
  )
}

export default LatestShows;