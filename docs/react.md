# React

React is an open source JavaScript library for creating user interfaces.

## Table of content

- [Introduction](#introduction)
- [Web application packager](#web-application-packager)
- [JavaScript XML](#javascript-xml--jsx)
- [Components](#components)
- [Rendering](#rendering)
- [Hooks](#hooks)
- [Routers](#routers)
- [Styling](#styling)
- [Event Handlers](#event-handlers)
- [Structuring a project with React](#structuring-a-project-with-react)
- [Deploy in github pages](#deploy-in-github-pages)

## Introduction

This project is to have a record of what i have learned about React.

## Web application packager

CLI tools for React development

**[Vite](https://vitejs.dev/)** is a build tool that aims to provide a faster and leaner development experience for modern web projects.

```bash
npm create vite@latest
# Project name: ?
# Select a framework: 'react'
# Select a variant: 'js + SWC' or 'ts + SWC'
cd name-project
npm install
npm run dev
```

The old alternative is to occupy the **[Create-React-App](https://create-react-app.dev/)**

[⬆️ Back to top ⬆️](#react)

## [JavaScript XML ( JSX )](https://react.dev/learn/writing-markup-with-jsx)

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

[⬆️ Back to top ⬆️](#react)

## Components

A component is a piece of code that renders a part of the interface. Components can be parameterized, reused and can contain their own state.

- Use PascalCase
- Must return a react element

### _Ways to create a component_

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

### _Props_

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

[⬆️ Back to top ⬆️](#react)

## Rendering

The virtual DOM (V DOM) It is a lightweight in-memory representation of the DOM (Document Object Model),
and it is used to optimize the rendering of components in a React application.

### _List and keys_

Keys are used by React to identify more efficiently the elements that have been changed, added or deleted within the application, keys are used only when we want to show the data of an array, such as a list.

```jsx
<section>
  {array.map((data) => (
    <Component key={data.id} />
  ))}
</section>
```

### _Conditional Rendering_

Conditional rendering in React works the same way conditions work in JavaScript

```jsx
function Component({ age, name }) {
  // IF
  if (age < 18) {
    return <section>You are a minor.</section>;
  }
  // Ternary operator
  return <section>{name ? name : "User"} of legal age.</section>;
}
```

[⬆️ Back to top ⬆️](#react)

## Hooks

Hooks are a React API that allows us to have state, and other React features, in components created with a function

### _Basic Hooks_

- [useState](/react/hooks/basic-hooks/useState.jsx)
  - useState is a React Hook that allows you to add a state variable to your component.
  ```jsx
  const [state, setState] = useState(initialState);
  ```
- [useEffect](/react/hooks/basic-hooks/useEffect.jsx)
  - useEffect is a React Hook that allows you to synchronize a component with an external system
  ```jsx
  useEffect(setup, dependencies?)
  ```

[⬆️ Back to top ⬆️](#react)

## Routers

Routing is an essential concept in Single Page Applications (SPA).

### _[React router](/react/routers/react-router.jsx)_

React Router is a JavaScript framework that lets us handle client and server-side routing in React applications.

```bash
npm install react-router-dom
```

[⬆️ Back to top ⬆️](#react)

## State Management

State management is a way to organize state and how data flows between your components.

### _[Context](/react/state-management/context.jsx)_

This context object can be used to pass data through the component tree without having to pass props down manually at every level. It allows components to subscribe to changes in the context value.

[⬆️ Back to top ⬆️](#react)

## Styling

In modern React, there are many ways to style a React application with CSS.

### _[CSS inline](/react/styles/inline-css.jsx)_

React lets you add CSS inline, written as attributes and passed to elements.

### _[CSS modules](/react/styles/module/)_

React allows you to add CSS modules to be available within the component in which they are used because they have a local scope by default.

[⬆️ Back to top ⬆️](#react)

## Event Handlers

React lets you add event handlers to your JSX. Event handlers are your own functions that will be triggered in response to interactions like clicking, hovering, focusing form inputs, and so on.

```JSX
const handlerClick = (event) => {}
const handlerChange = (event) => {}

<button onclick={handlerClick}>Text</button>
<input type="text" onChange={handlerChange} />
```

[⬆️ Back to top ⬆️](#react)

## Deploy in GitHub pages

The first thing we do is type in console.

```bash
npm run build
```

This command is the one thar generates our project to production. The files created are static, so you can use any static file deployment service such as [GitHub Pages](https://pages.github.com/).

We use an npm package which is [gh-pages](https://www.npmjs.com/package/gh-pages)

```bash
npm install gh-pages --save-dev
```

The script is created in the **package.json** to deploy.

```json
"scripts": {
  "deploy": "gh-pages -d dist"
}
```

We add the settings for the deployment of a static site provided by [vite](https://vitejs.dev/guide/static-deploy#github-pages).

```bash
npm run deploy
```

[⬆️ Back to top ⬆️](#react)
