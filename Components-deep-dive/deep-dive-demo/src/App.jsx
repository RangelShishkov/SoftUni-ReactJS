import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);

  useEffect(() => {
    console.log("Mount Component!");
  }, []);

  useEffect(() => {
    console.log("Update Component - numbers!");
  }, [numbers]);


  const onClick = () => {
    setNumbers((oldState) => oldState.slice(0, oldState.length - 1));
  };
  return (
    <div>
      <ul>
        {numbers.map((number, index) => (
          <li key={index}>{number * 2}</li>
        ))}
      </ul>
      <button onClick={onClick}>Remove</button>
    </div>
  );
}

export default App;
