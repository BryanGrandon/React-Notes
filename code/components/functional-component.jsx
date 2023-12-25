import React from "https://esm.sh/react@18.2.0";
import ReactDOM from "https://esm.sh/react-dom@18.2.0/client";
const root = ReactDOM.createRoot(document.getElementById("root"));

function Greetings(props) {
  return <h1>Hello, {props.name}</h1>;
}

{
  /* Prop name */
}
root.render(<Greetings name="Bryan"></Greetings>);
