import React from 'react'

const Filter = ({filterQuery, handleFilterQueryChange}) => {
  return (
    <div>
      <input value={filterQuery} onChange={handleFilterQueryChange} />
    </div>
  )
}

export default Filter