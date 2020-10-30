import React, { Fragment } from 'react'

const Networks = ({ networks }) => {
  const checkNetworks = (networks) => {
    if (networks !== undefined) {
      return networks.length > 0 ? networks : false;
    } else { return false; }
  }
  return (
    <Fragment>
      {checkNetworks(networks) !== false ? (
        <div>
          <p className="text-head font-bold text-white mb-2">{networks.length > 1 ? 'Networks' : 'Network'}</p>
          <ul className="bg pb-1 mb-2 b-dotted-primary">
            {networks.map((n) => {
              return (
                <li key={n.id} className="mt-1 mx-1 btn text-white font-l bg-secondary">
                  {n.name}
                </li>
              )
            })}
          </ul>
        </div>
      ) : (
          ''
        )}
    </Fragment>
  )
}

export default Networks
