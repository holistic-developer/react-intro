import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  let count2 = 0;

  const countUp = () => {
    // this is not how it should be done
    count2 += 1;
    setCount(count + 1);
  };

  console.log(count2);
  

  return (
    <>
      <p>{count}</p>
      <button onClick={() => countUp()}>+1</button>
    </>
  );
};
