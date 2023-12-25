import React from "https://esm.sh/react@18.2.0";
import ReactDOM from "https://esm.sh/react-dom@18.2.0/client";
const root = ReactDOM.createRoot(document.getElementById("root"));

const App = (props) => {
  return (
    <>
      <section className="class_img">
        <img src={props.src1} alt="image 1" />
      </section>

      <section className="class_img">
        <img src={props.src2} alt="image 1" />
      </section>
    </>
  );
};

root.render(
  <React.Fragment>
    <App src1="" src2="" />
  </React.Fragment>
);
