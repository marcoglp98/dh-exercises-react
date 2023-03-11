import React from "react";
import ClickCounter from './ClickCounter';

export const App = () => {
  
  const onCounterChange = (value) => {
    console.log(value)
  }
  return (
      <div>
        <ClickCounter onCounterChange={onCounterChange}/>
      </div>
    )
  }

