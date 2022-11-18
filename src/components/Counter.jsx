import React from "react";
import useCounter from "./hooks/useCounter";
import './Counter.css'
const Counter = () => {
  const [count, increment, decrement, reset] = useCounter(0, 5);
  return (
    <div>
      <h1 class="bg-success p-2 text-dark bg-opacity-50">{count}</h1>
      <button class="btn btn-outline-info"  onClick={increment}>
        +
      </button> <br /><br />
      <button class='btn btn-outline-secondary' onClick={decrement}>
        -
      </button>
      <br /><br />
      <button class="btn btn-outline-secondary" onClick={reset}>reset</button>
    </div>
  );
};

export default Counter;
