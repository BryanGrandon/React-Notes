{
  /* index.jsx */
}

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

{
  /* App.jsx */
}

import { BrowserRouter, Route, Routes } from "react-router-dom";

const Home = () => {
  return <div>Home</div>;
};

const About = () => {
  return <div>About</div>;
};

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}
export default App;

{
  /* Route.
      path: Route name.
      element: Render the component when the specified path is visited.
   */
}
