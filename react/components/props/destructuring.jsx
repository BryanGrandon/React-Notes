function NoDestructuring(props) {
  let text = `Name:${props.name}, Age:${props.age}`;
  return <p>{text}</p>;
}

function WithDestructuring({ name, age }) {
  let text = `Name:${name}, Age:${age}`;
  return <p>{text}</p>;
}
