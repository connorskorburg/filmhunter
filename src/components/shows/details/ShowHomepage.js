import React, { Fragment } from 'react'

const HomePage = ({ homepage, original_name }) => {
  return (
    <Fragment>
      { homepage !== '' ? (
        <Fragment>
          <p className="text-head text-white font-bold mt-2 mb-1">Visit Home Page</p>
          <a className="btn btn-secondary mb-2" href={homepage}>
            {original_name} Homepage
          </a>
        </Fragment>
      ) : (
          ''
        )}
    </Fragment>
  )
}

export default HomePage
