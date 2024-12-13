import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const countUp = () => {
    setCount(count + 1);
  };

  return (
    <>
      <p>{count}</p>
      <button onClick={() => countUp()}>+1</button>
    </>
  );
};
