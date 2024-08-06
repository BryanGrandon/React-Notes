# [JavaScript XML ( JSX )](https://react.dev/learn/writing-markup-with-jsx)

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
