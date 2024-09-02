# React Notes

React is an open source JavaScript library for creating user interfaces.

## Table of content

- [Web application packager](#web-application-packager)
- [JavaScript XML](#javascript-xml--jsx-)
- [Components](#components)
- [Rendering](#rendering)
- [Hooks](#hooks)
- [Routers](#routers)
- [State Management](#state-management)
- [Styling](#styling)
- [Event Handlers](#event-handlers)
- [Deploy in GitHub pages](#deploy-in-github-pages)

## Web application packager

CLI tools for React development

[Vite](https://vitejs.dev/) is a build tool that aims to provide a faster and leaner development experience for modern web projects.

```bash
npm create vite@latest
# Project name: ?
# Select a framework: 'react'
# Select a variant: 'js + SWC' or 'ts + SWC'
cd name-project
npm install
npm run dev
```

The old alternative is to occupy the [Create-React-App](https://create-react-app.dev/)

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

## Components

A component is a piece of code that renders a part of the interface. Components can be parameterized, reused and can contain their own state.

- Use PascalCase
- Must return a react element

### Ways to create a component

- ```jsx
  function Greeting(props) {
    return <h1>Hello, {props.name}</h1>;
  }
  ```

- ```jsx
  class Greetings extends React.Component {
    // Must have a render() method to return a JSX element.
    render() {
      return <h1>Hello, {this.props.name}!</h1>;
    }
  }
  ```

### Props

React component functions accept a single argument, a `props` object. React components use it to communicate with each other.

- [Destructuring.](/react/components/props/destructuring.jsx)
  - In general, you do not need access to the entire props object, so you can deconstruct it into individual props.
- [Assigning a default value for a prop.](/react/components/props/assingning-a-default-value.jsx)
  - Using Destructuring
  - DefaultProps
- [PropTypes.](/react/components/library/prop-types.jsx)
  - PropTypes are simply a mechanism that ensures that the passed value is of the correct datatype.
    ```bash
    npm install --save prop-types
    ```

## Rendering

The virtual DOM (V DOM) It is a lightweight in-memory representation of the DOM (Document Object Model),
and it is used to optimize the rendering of components in a React application.

- List and keys

  Keys are used by React to identify more efficiently the elements that have been changed, added or deleted within the application, keys are used only when we want to show the data of an array, such as a list.

  ```jsx
  <section>
    {array.map((data) => (
      <Component key={data.id} />
    ))}
  </section>
  ```

- Conditional Rendering

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

## Hooks

Hooks are a React API that allows us to have state, and other React features, in components created with a function

### Basic Hooks

- [useState](/react/hooks/basic-hooks/useState.jsx) is a React Hook that allows you to add a state variable to your component.
  ```jsx
  const [state, setState] = useState(initialState);
  ```
- [useEffect](/react/hooks/basic-hooks/useEffect.jsx) is a React Hook that allows you to synchronize a component with an external system.
  ```jsx
  useEffect(setup, dependencies?)
  ```

## Routers

Routing is an essential concept in Single Page Applications (SPA).

- [React router](/react/routers/react-router.jsx) is a JavaScript framework that lets us handle client and server-side routing in React applications.

  ```bash
  npm install react-router-dom
  ```

### Github Pages

In github pages the routes are not used so react-router provides us with HashRouter that allows us to define the routes with the element to be rendered.

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/pokemon/:id",
    element: <Pokemon />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
```

## State Management

State management is a way to organize state and how data flows between your components.

### [Context](/react/state-management/context.jsx)

This context object can be used to pass data through the component tree without having to pass props down manually at every level. It allows components to subscribe to changes in the context value.

## Styling

In modern React, there are many ways to style a React application with CSS.

- [CSS inline.](/react/styles/inline-css.jsx)

  React lets you add CSS inline, written as attributes and passed to elements.

- [CSS modules.](/react/styles/module/)

  React allows you to add CSS modules to be available within the component in which they are used because they have a local scope by default.

## Event Handlers

React lets you add event handlers to your JSX. Event handlers are your own functions that will be triggered in response to interactions like clicking, hovering, focusing form inputs, and so on.

```JSX
const handlerClick = (event) => {}
const handlerChange = (event) => {}

<button onclick={handlerClick}>Text</button>
<input type="text" onChange={handlerChange} />
```

## Deploy in GitHub pages

### [Vite](https://vitejs.dev/guide/static-deploy)

Set the correct base in vite.config.js.

If you are deploying to https://`<USERNAME>`.github.io/, or to a custom domain through GitHub Pages (eg. www.example.com), set base to '/'. Alternatively, you can remove base from the configuration, as it defaults to '/'.

If you are deploying to https://`<USERNAME>`.github.io/`<REPO>`/ (eg. your repository is at https://github.com/`<USERNAME>`/`<REPO>`), then set base to '/`<REPO>`/'.

Go to your GitHub Pages configuration in the repository settings page and choose the source of deployment as "GitHub Actions", this will lead you to create a workflow that builds and deploys your project, a sample workflow that installs dependencies and builds using npm is provided:

```yml
# Simple workflow for deploying static content to GitHub Pages
name: Deploy static content to Pages

on:
  # Runs on pushes targeting the default branch
  push:
    branches: ["main"]

  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

# Sets the GITHUB_TOKEN permissions to allow deployment to GitHub Pages
permissions:
  contents: read
  pages: write
  id-token: write

# Allow one concurrent deployment
concurrency:
  group: "pages"
  cancel-in-progress: true

jobs:
  # Single deploy job since we're just deploying
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Set up Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: "npm"
      - name: Install dependencies
        run: npm ci
      - name: Build
        run: npm run build
      - name: Setup Pages
        uses: actions/configure-pages@v4
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          # Upload dist folder
          path: "./dist"
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```
