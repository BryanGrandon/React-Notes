{
  /* Must extend React.Components. */
}
class Greetings extends React.Component {
  // Must have a render() method to return a JSX element.
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}
