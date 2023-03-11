import { useState, useEffect } from "react";

export const ClickCounter = ({ onCounterChange }) => {
  const [counter, setCounter] = useState(0)

  const handleClick = () => {
    setCounter(cnt => cnt + 1)
  }

  useEffect(() => onCounterChange(counter), [onCounterChange, counter])

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={handleClick}>Cliccami</button>
    </div>
  );
}

