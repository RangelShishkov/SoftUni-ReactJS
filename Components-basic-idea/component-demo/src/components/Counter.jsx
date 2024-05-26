import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const onIncrementClick = () => {
    setCount(count + 1);
  };

  const onClearClick = () => {
    setCount(0);
  };

  const onDecrementClick = () => {
    setCount(count - 1);
  };
  //CONDITIONAL RENDERING examples

  // if (count < 0) {
  //   return <h3>Invalid Counter!</h3>;
  // }

  // let warning = null;
  // if (count < 0) {
  //   warning = <p>Invalid Count!</p>;
  // }

  return (
    <div>
      <h3>Counter</h3>
      {/* {warning} */}

      {count < 0 ? <p>Invalid Count!</p> : null}

      {count == 0 && <p>Please start incrementing!</p>}

      <p>Count: {count}</p>
      <button onClick={onIncrementClick}>+</button>
      <button onClick={onClearClick}>clear</button>
      <button onClick={onDecrementClick}>-</button>
    </div>
  );
}
