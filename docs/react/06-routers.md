# Routers

Routing is an essential concept in Single Page Applications (SPA).

## _[React router](/react/routers/react-router.jsx)_

React Router is a JavaScript framework that lets us handle client and server-side routing in React applications.

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
