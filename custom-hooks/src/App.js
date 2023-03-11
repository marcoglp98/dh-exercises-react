import useCounter from './useCounter';

export const App = () => {
  const { counter, onIncrement, onDecrement, onReset } = useCounter(5, 2, 3)
  return (
    <div>
      <h2>Contatore: {counter}</h2>
      <button onClick={onIncrement}>Incrementa</button>
      <button onClick={onDecrement}>Sottrai</button>
      <button onClick={onReset}>Reset</button>
    </div>
  )
}

