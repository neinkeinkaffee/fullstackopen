import React from 'react'

const Header = ({ course }) => {
  return (
    <h1>{course}</h1>
  )
}

const Part = ({ part, exercises }) => {
  return (
    <p>
      {part} {exercises}
    </p>
  )
}

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map(part => <Part part={part.name} exercises={part.exercises} />)}
    </div>
  )
}

const Footer = ({ parts }) => {
  return (
    <p>Number of exercises {parts.reduce((s, p) => s + p.exercises, 0)}</p>
  )
}

const Course = ({ course }) => {
 return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Footer parts={course.parts} />
    </div>
   )
}

export default Course