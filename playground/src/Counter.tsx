import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const countUp = () => {
    // this is not how it should be done
    setCount(count + 1);
  };

  console.log(count);
  

  return (
    <>
      <p>{count}</p>
      <button onClick={() => countUp()}>+1</button>
    </>
  );
};
