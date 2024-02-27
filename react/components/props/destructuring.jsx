// No destructuring

function NoDestructuring(props) {
  let text = `Name:${props.name}, Age:${props.age}`;
}

// With destructuring

function WithDestructuring({ name, age }) {
  let text = `Name:${name}, Age:${age}`;
}

ShadowRoot.render(
  <>
    <NoDestructuring name="Ricardo" age="21" />

    <WithDestructuring name="Sofia" age="14" />
  </>
);
