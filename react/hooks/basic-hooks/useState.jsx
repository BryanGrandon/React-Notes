import { useState } from "react";

const Counter = () => {
  const [message, setMessage] = useState();
  return (
    <>
      <input type="text" onChange={(e) => setMessage(e.target.value)} />
      <button
        onClick={() => {
          alert(`The message is: ${message}`);
        }}
      >
        Save
      </button>
    </>
  );
};
