import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const Statistic = (props) => {
  return <tr><td>{props.text}</td><td>{props.value}</td></tr>
}

const Statistics = (props) => {
  if (props.good + props.bad + props.neutral === 0)
    return <table><tbody><tr><td>No feedback given</td></tr></tbody></table>

  const computeAverage = () => {
    if (props.good + props.bad === 0)
      return 0
    return (props.good - props.bad)/(props.good + props.bad)
  }

  const computePositive = () => {
    if (props.good + props.bad + props.neutral === 0)
      return 0
    return props.good/(props.good + props.neutral + props.bad)
  }

  return (
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <Statistic text="good" value={props.good} />
          <Statistic text="neutral" value={props.neutral} />
          <Statistic text="bad" value={props.bad} />
          <Statistic text="average" value={computeAverage()} />
          <Statistic text="positive" value={computePositive()} />
        </tbody>
      </table>
    </div>
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

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text="Good" />
      <Button handleClick={handleNeutralClick} text="Neutral" />
      <Button handleClick={handleBadClick} text="Bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)