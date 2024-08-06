# Event Handlers

React lets you add event handlers to your JSX. Event handlers are your own functions that will be triggered in response to interactions like clicking, hovering, focusing form inputs, and so on.

```JSX
const handlerClick = (event) => {}
const handlerChange = (event) => {}

<button onclick={handlerClick}>Text</button>
<input type="text" onChange={handlerChange} />
```
