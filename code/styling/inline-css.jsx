import React from "https://esm.sh/react@18.2.0";
import ReactDOM from "https://esm.sh/react-dom@18.2.0/client";
const root = ReactDOM.createRoot(document.getElementById("root"));

function TaskCard({ ready }) {
  const cardStyle = { background: "#202020", color: "#fff", padding: "1rem" };

  return (
    <section style={cardStyle}>
      <h3>My first task</h3>
      <span style={ready ? { color: "green" } : { color: "red" }}>
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
