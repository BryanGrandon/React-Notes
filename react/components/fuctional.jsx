{
  /* Use PascalCase */
}
function Greeting(props) {
  return <h1>Hello, {props.name}</h1>;
}
root.render(
  <>
    {/* Must return a react element */}
    <Greeting name="Bryan" />
  </>
);
