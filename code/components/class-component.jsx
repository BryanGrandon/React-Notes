import React from "https://esm.sh/react@18.2.0";
import ReactDOM from "https://esm.sh/react-dom@18.2.0/client";
const root = ReactDOM.createRoot(document.getElementById("root"));

{
  /* Do not use */
}

class Greetings extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}
