import React, { Fragment } from 'react'

const ProductionCompanies = ({ production_companies }) => {
  const checkComanies = (production_companies) => {
    if (production_companies !== undefined) {
      if (production_companies.length > 0) {
        return production_companies;
      }
    }
    else {
      return false;
    }
  }
  return (
    <Fragment>
      { checkComanies(production_companies) !== false ? (
        <div>
          <p className="text-head font-bold text-white mb-2">Production Companies</p>
          <ul className="bg pb-1 mb-2 b-dotted-primary">
            {production_companies &&
              production_companies.map((p) => {
                return (
                  <li className="mt-1 mx-1 btn text-white font-l bg-secondary" key={p.id}>
                    {p.name}
                  </li>
                );
              })}
          </ul>
        </div>
      ) : (
          ''
        )}
    </Fragment>
  )
}

export default ProductionCompanies;
