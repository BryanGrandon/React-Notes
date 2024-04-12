{
  /*
    useState hook is used to manage the state of a component in functional components. 
    Calling useState returns an array with tho elements: 
    the current state value and a function to update the state.
   */
}

import { useState } from "react";
const [state, setState] = useState(initialState);

{
  /* Example */
}

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
