import React from "https://esm.sh/react@18.2.0";
import ReactDOM from "https://esm.sh/react-dom@18.2.0/client";
const root = ReactDOM.createRoot(document.getElementById("root"));

import "./styles/Task.css";

function TaskCard({ ready }) {
  return (
    <section className="box">
      <h3>My first task</h3>
      <span className={ready ? "done" : "pending"}>
        {ready ? "Task done" : "Pending task"}
      </span>
    </section>
  );
}

root.render(
  <>
    <TaskCard ready={true} />
    <TaskCard ready={false} />
  </>
);
