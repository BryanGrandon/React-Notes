import { useState } from "react";

const [state, setState] = useState(initialState);

function CounterS() {
  const [count, setCount] = useState(0);
  return (
    <>
      <p>Counter: {count}</p>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Click here!
      </button>
    </>
  );
}
