import React from "react";

export default function Card() {
  const cardStyles = { background: "#202020", color: "#fff", padding: "1rem" };
  const titleStyles = { color: "#1f1234", textAlign: "center" };

  return (
    <section style={cardStyles}>
      <h2 style={titleStyles}>Title</h2>
    </section>
  );
}
