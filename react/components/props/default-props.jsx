{
  /*
      The defaultProps is a React component property that allows you to set
      default values for the props argument.
   */
}

function Message(props) {
  return (
    <section>
      <h3>{props.name}</h3>
      <p>{props.text}</p>
    </section>
  );
}

Message.defaultProps = {
  name: "Some user",
};

{
  /* Using Destruction */
}

function Comment({ text, name = "Some user" }) {
  return (
    <section>
      <h3>{name}</h3>
      <p>{text}</p>
    </section>
  );
}
