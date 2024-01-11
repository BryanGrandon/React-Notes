function Comment({ text, name }) {
  // Comment({text, name = "user"})
  return (
    <section>
      <h3>{name}</h3>
      <p>{text}</p>
    </section>
  );
}

Comment.defaultProps = {
  name: "Some user",
};

root.render(
  <>
    <Comment text="Hello" />
    <Comment text="Hello World" name="Joe" />
  </>
);
