import React, { useEffect, useContext } from 'react'
import ShowContext from '../../context/show/showContext';
import Loading from '../layout/Loading';


const Show = ({ match: { params: { id } } }) => {

  const showContext = useContext(ShowContext);

  const { show, loading, setLoading, getShow } = showContext;

  useEffect(() => {
    setLoading();
    getShow(id);
    //eslint-disable-next-line
  }, [id])

  let content;

  if (loading) {
    content = <Loading />;
  } else {
    content = <div>{show.original_name}</div>
  }

  return (
    <div className='pt-4'>
      {content}
    </div>
  )
}

export default Show
