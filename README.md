# React

React is an open source JavaScript library for creating user interfaces.

## _Table of content_

- [Introduction](#introduction)
- [Web application packager](#web-application-packager)
- [JavaScript XML](#javascript-xml--jsx)
- [Components](#components)

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

## _JavaScript XML ( JSX )_

React uses JSX to declare what to render. JSX is a JavaScript extension that allows you to write code that is visually closer to HTML, which improves the readability of the code and makes it easier to understand.

### [JSX Rules](/code/jsx.jsx)

1. All tags must be closed.
2. Components must return only one parent element.
3. Rely on Fragment when i need to return 2 elements.
4. Fragment => `<>` children `</>` OR `<React.Fragment>`.
5. img always closes => `<img />`.
6. class => className.
7. for => htmlFor.

## _Components_

A component is a piece of code that renders a part of the interface. Components can be parameterized, reused and can contain their own state. <br>
In react components are create using functions or classes.

### Props

Props are the properties of a component. They are data that are passed from one component to another. <br>
Add properties (props) as attributes.

### [Functional component](/code/components/functional-component.jsx)

- Must return a react element.
- Must begin with a capital letter ( PascalCase ).

### [Class component](/code/components/class-component.jsx)

- Must extend React.Components.
- Must have a render() method to return a JSX element.
