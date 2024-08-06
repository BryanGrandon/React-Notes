# Components

A component is a piece of code that renders a part of the interface. Components can be parameterized, reused and can contain their own state.

- Use PascalCase
- Must return a react element

## _Ways to create a component_

- Functional Component

  ```jsx
  function Greeting(props) {
    return <h1>Hello, {props.name}</h1>;
  }
  ```

- Class Component
  ```jsx
  class Greetings extends React.Component {
    // Must have a render() method to return a JSX element.
    render() {
      return <h1>Hello, {this.props.name}!</h1>;
    }
  }
  ```

## _Props_

React component functions accept a single argument, a `props` object. React components use it to communicate with each other.

- [Destructuring](/react/components/props/destructuring.jsx)
  - In general, you do not need access to the entire props object, so you can deconstruct it into individual props.
- [Assigning a default value for a prop](/react/components/props/assingning-a-default-value.jsx).
  - Using Destructuring
  - DefaultProps
- [PropTypes](/react/components/library/prop-types.jsx)
  - PropTypes are simply a mechanism that ensures that the passed value is of the correct datatype.
  ```bash
   npm install --save prop-types
  ```
