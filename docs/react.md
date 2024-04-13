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

- [Functional component](/react/components/fuctional.jsx)
- [Class component](/react/components/class.jsx)

### _Props_

React components use Props to communicate with each other. They can be assigned any JavaScript value.

- [Destructuring](/react/components/props/destructuring.jsx)
- [PropTypes](/react/components/props/prop-types.jsx)
- [DefaultProps](/react/components/props/default-props.jsx)

[⬆️ Back to top ⬆️](#react)

## Rendering

The virtual DOM (V DOM) It is a lightweight in-memory representation of the DOM (Document Object Model),
and it is used to optimize the rendering of components in a React application.

### _List and keys_

When you render lists in React, you can use the key prop to specify a unique key for each item. This key is used to identify which item to update when you want to update a specific item.

```jsx
<section key={person.id}>...</section>
```

### _Conditional Rendering_

Use JavaScript operators like `if` or the `conditional operator` to create elements representing the current state, and let React update the UI to match them.

- if
- &&
- Ternary operator

[⬆️ Back to top ⬆️](#react)

## Hooks

Hooks are a React API that allows us to have state, and other React features, in components created with a function

### _Basic Hooks_

- [useState](/react/hooks/basic-hooks/useState.jsx)
- [useEffect](/react/hooks/basic-hooks/useEffect.jsx)

[⬆️ Back to top ⬆️](#react)

## Routers

Routing is an essential concept in Single Page Applications (SPA).

### _[React router](/react/routers/react-router.jsx)_

React Router is a JavaScript framework that lets us handle client and server-side routing in React applications.

```bash
npm install react-router-dom
```

[⬆️ Back to top ⬆️](#react)

## [Styling](/https://react.dev/learn/tutorial-tic-tac-toe#stylescss)

Choosing the right method for styling components isn’t an absolute truth. It’s a relative choice that should serve your use case, it depends on your personal preferences and the specific complexity of your application.

React lets you add **[CSS inline](/react/styling/inline-css.jsx)**, written as attributes and passed to elements.

```JSX
<p style={{color:"#1f1235"}}>Text</p>

const styleText = { color: "red" }
<p style={styleText}>Text</p>
```

React allows you to add **[CSS modules](/react/styling/module-css.jsx)** to be available within the component in which they are used because they have a local scope by default.

```JSX
import "./styles/element.css";

<p className="text">Text</p>
```

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

## Structuring a project with React

### _Organize components_

- **Components**: They are sets of styled elements that fulfill a single objective.
- **Containers**: Containers are groupings of components. They are usually sections.
- **Pages**: They are formed by containers and components. Normally they are the components that slow the routes of oru application.

For each page, container and component, I create a folder and separate the element styles from the layout and functionality.
Components are usually grouped according to their type so there is no confusion.
In the container folder, folders are created with the names of the pages with the
containers that form them.

### _Organize global constants_

Having separated in a folder those constants that are used globally in the application avoids headaches in case of having to change any of them.

### _Organized requests_

To organize the request to an api, a folder called services is created to separate each call to an endpoint into a file and group them into entries.

### _Organizing the global state_

If the web needs global state, a folder called context or redux is created. Then create a folder with the name of each value that will have our global state.

### _Naming files and folders_

Both PascalCase and kebab-case can be used to name files and folders, ideally you should use one of these naming methods for the project and not use both in the same project.

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
