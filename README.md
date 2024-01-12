# React

React is an open source JavaScript library for creating user interfaces.

## _Table of content_

- [Introduction](#introduction)
- [Web application packager](#web-application-packager)
- [JavaScript XML](#javascript-xml--jsx)
- [Components](#components)
- [Styling](#styling)
- [Event Handlers](#event-handlers)
- [Rendering](#rendering)
- [Hooks](#hooks)

## _Introduction_

This project is to have a record of what i have learned about React.

## _Web application packager_

CLI tools for React development

- [Vite](https://vitejs.dev/)
- [Create-React-App](https://create-react-app.dev/)

### Vite

Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects.

```bash
npm create vite@latest
# Project name: ?
# Select a framework: 'react'
# Select a variant: 'js + SWC' or 'ts + SWC'
cd name-project
npm install
npm run dev
```

## _[JavaScript XML ( JSX )](https://react.dev/learn/writing-markup-with-jsx)_

React uses JSX to declare what to render. JSX is a JavaScript extension that allows you to write code that is visually closer to HTML, which improves the readability of the code and makes it easier to understand.

```JSX
{/* All tags must be closed */}

const Component = (props) => {
{/* Components must return only one parent element */}
  return (
    {/* Recourse to Fragment when I need to return 2 elements
    <React.Fragment></React.Fragment> is the same as <></> */}
    <>
      <h2>Component</h2>

      {/* To assign a CSS class, use className */}
      <section className="">
        {/* We can use { } to insert JavaScript expressions in our JSX code. */}
        <p>{props.text}</p>
      </section>

      {/* The for attribute is written htmlFor */}
      <label htmlFor="user">User</label>
      <input type="text" name="" id="user" />
    </>
  );
};
```

## _[Components](https://react.dev/reference/react/components)_

A component is a piece of code that renders a part of the interface. Components can be parameterized, reused and can contain their own state.

- [Functional Component](/code/components/fuctional.jsx)
- [Class Component](/code/components/class.jsx)

### [Props](/https://react.dev/learn/passing-props-to-a-component)

React components use props to communicate with each other. Props might remind you of HTML attributes, but you can pass any JavaScript value through them, including objects, arrays, and functions.

- [Destructuring](/code/components/props/destructuring.jsx)
- [PropTypes](/code/components/props/prop-types.jsx)
- [DefaultProps](/code/components/props/default-props.jsx)

## _[Styling](/https://react.dev/learn/tutorial-tic-tac-toe#stylescss)_

Choosing the right method for styling components isn’t an absolute truth. It’s a relative choice that should serve your use case, it depends on your personal preferences and the specific complexity of your application.

### [Inline CSS](/code/styling/inline-css.jsx)

React lets you add CSS inline, written as attributes and passed to elements.

```JSX
<p style={{color:"#1f1235"}}>Text</p>

const styleText = { color: "red" }
<p style={styleText}>Text</p>
```

### [CSS modules](/code/styling/module-css.jsx)

CSS files in which all class names and animation names are scoped locally by default.

CSS classes are only available within the component where they are used.

```JSX
import "./styles/element.css";

<p className="text">Text</p>
```

## _Event Handlers_

React lets you add event handlers to your JSX. Event handlers are your own functions that will be triggered in response to interactions like clicking, hovering, focusing form inputs, and so on.

```JSX
const handlerClick = (event) => {}
const handlerChange = (event) => {}

<button onclick={handlerClick}>Text</button>
<input type="text" onChange={handlerChange} />
```

## _Rendering_

The virtual DOM (V DOM) It is a lightweight in-memory representation of the DOM (Document Object Model),
and it is used to optimize the rendering of components in a React application.

### Component life cycle

React components have a lifecycle consisting of three phases: Mounting, Updating, and Unmounting along with several
“lifecycle methods” that you can override to run code at particular times in the process.

### [List and keys](/code/rendering/list-and-keys.jsx)

When you render lists in React, you can use the key prop to specify a unique key for each item.
This key is used to identify which item to update when you want to update a specific item.

### [Render props](/code/rendering/render-props.jsx)

The term 'render props' refers to a technique for sharing code between React components using a prop whose value is a function. A component with a render prop takes a function that returns a React element and calls it instead of implementing its own its own render logic.

### [Conditional Rendering](/code/rendering/conditional-rendering.jsx)

Use JavaScript operators like 'if' or the 'conditional operator' to create elements representing the current state,
and let React update the UI to match them.

- If else.
- Ternary operator.

## _Hooks_

Hooks are a React API that allows us to have state, and other React features, in components created with a function

- useState.
- useEffect.
- useContext.

### [useState](/code/hooks/usestate.jsx)

useState hook is used to manage the state of a component in functional components. Calling useState returns an array with tho elements: the current state value and a function to update the state.

### [useEffect](/code/hooks/useeffect.jsx)

useEffect is a special hook that lets you run side effects in React. It is similar to componentDidMount and componentDidUpdate, but it only runs when the component (or some of its props) changes and during the initial mount.
