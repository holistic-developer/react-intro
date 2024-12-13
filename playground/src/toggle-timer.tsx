import { useState } from "react";
import { Timer } from "./timer";

export const ToggleTimer = () => {
  const [isTimerVisible, setIsTimerVisible] = useState(false);
  const toggleTimer = () => setIsTimerVisible((prev) => !prev);

  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
      
      {isTimerVisible && <Timer />}
      
      <button onClick={() => toggleTimer()}>Toggle Timer</button>
    </div>
  );
};
