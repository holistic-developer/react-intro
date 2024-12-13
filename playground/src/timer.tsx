import { useEffect, useState } from "react";

export const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1);
        console.log("tick");
    }, 1000)
    console.log("effect run");
    
    return () => clearInterval(interval);
  }, [setSeconds]);

  return (
    <span>You have been seeing this component since {seconds} seconds.</span>
  );
};
