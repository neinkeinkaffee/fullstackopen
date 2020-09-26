import React from 'react'

const Persons = ({persons, filterQuery}) => {
  return (
    <div>
      <ul>
          {persons
            .filter(person => person.name.toLowerCase().match(filterQuery.toLowerCase()))
            .map(person => <li key={person.name}>{person.name} {person.number}</li>)}
      </ul>
    </div>
  )
}

export default Persons