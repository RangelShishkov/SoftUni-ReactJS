import { useState, useEffect } from "react";
import styles from "./App.module.css";
import Starwars from "./Starwars";

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
      <Starwars />
      <ul>
        {numbers.map((number, index) => (
          <li className={styles.listItem} key={index}>
            {number * 2}
          </li>
        ))}
      </ul>
      <button style={{ marginRight: "10px" }} onClick={onClick}>
        Remove
      </button>
    </div>
  );
}

export default App;
