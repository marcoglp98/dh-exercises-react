import { useState } from "react";
import Counter from './Counter';

export const App = () => {
  const [unmount, setUnmount] = useState(false);
  const handleClick = () => {
    setUnmount(true)
  }

  return (
    <div>
      {!unmount && <Counter />}
      <button onClick={handleClick}>Click to unmount</button>
    </div>
  )
}
