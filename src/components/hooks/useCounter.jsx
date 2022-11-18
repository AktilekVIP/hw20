import { useState } from "react";

const useCounter = (initialCount = 0, value) => {
  const [count, setCount] = useState(initialCount);
  const increment = () => {
      if (count >= 50) {
        return alert("Max result");
      }
      setCount(count + value);
  };
  const decrement = () => {
    if (count > 0) {
      setCount(count - value);
    } else if (count === 0) {
      return alert("Min result");
    }
  };
  const reset = ()=>{
    setCount(initialCount)
  }
  return [count, increment, decrement,  reset];
};

export default useCounter;
