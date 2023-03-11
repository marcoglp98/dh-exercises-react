import { useState, useEffect } from 'react';

export const Counter = () => {
  const [counter, setCounter] = useState(0);


  useEffect(() => {
    let interval = setInterval(() => {
      setCounter(cnt => cnt + 1)
      
    }, 1000)
    console.log(counter)
    
    return () => {
      clearInterval(interval)
    }
  }, [counter])



  return (
    <div>
      <h1>{counter}</h1>
    </div>
  );
}

