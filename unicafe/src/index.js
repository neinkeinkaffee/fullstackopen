import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {

  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  const computeAverage = () => {
    if (good + bad === 0)
      return 0
    return (good - bad)/(good + bad)
  }

  const computePositive = () => {
    if (good + bad + neutral === 0)
      return 0
    return good/(good + neutral + bad)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text="Good" />
      <Button handleClick={handleNeutralClick} text="Neutral" />
      <Button handleClick={handleBadClick} text="Bad" />

      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>average {computeAverage()}</p>
      <p>positive {computePositive()}</p>
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)