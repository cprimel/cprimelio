import React from 'react'

const Filter = () => {
  return (
    <>
      <div className="filter">
        <span className="filter__text">Filter by keywords: </span>
        <input className="filter__input" type="text" placeholder="e.g., python"></input>
      </div>
    </>
  )
}

export default Filter