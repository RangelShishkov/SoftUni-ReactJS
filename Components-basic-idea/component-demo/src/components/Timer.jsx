import { useState } from "react";

export default function Timer() {
  const [time, setTime] = useState(0);
  
  console.log(`Current time is = ${time}`);

  setTimeout(() => {
    setTime(time + 1);
  }, 1000);
  return (
    <div>
      <h3>Timer</h3>
      <p>{time}</p>
    </div>
  );
}
