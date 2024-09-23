import { useState } from "react";

const Button = ({ onclick, title }) => {
  return (
    <>
      <button onClick={onclick}>{title}</button>
    </>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  if (good === 0 && neutral === 0 && bad === 0) {
    return <p>No feedback given</p>;
  }
  return (
    <>
      <p>Good -- {good}</p>
      <p>Neutral -- {neutral}</p>
      <p>Bad -- {bad}</p>
    </>
  );
};
const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const all = good + neutral + bad;
  const average = (good - bad) / all;
  const positive = (good / all) * 100;

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onclick={() => setGood(good + 1)} title="Good" />
      <Button onclick={() => setNeutral(neutral + 1)} title="Neutral" />
      <Button onclick={() => setBad(bad + 1)} title="Bad" />
      <br></br>
      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
      <br></br>
      <p>All: {all}</p>
      <p>Average: {average}</p>
      <p>Positive: {positive}%</p>
    </div>
  );
};

export default App;
