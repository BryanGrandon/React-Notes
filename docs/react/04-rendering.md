# Rendering

The virtual DOM (V DOM) It is a lightweight in-memory representation of the DOM (Document Object Model),
and it is used to optimize the rendering of components in a React application.

## _List and keys_

Keys are used by React to identify more efficiently the elements that have been changed, added or deleted within the application, keys are used only when we want to show the data of an array, such as a list.

```jsx
<section>
  {array.map((data) => (
    <Component key={data.id} />
  ))}
</section>
```

## _Conditional Rendering_

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
