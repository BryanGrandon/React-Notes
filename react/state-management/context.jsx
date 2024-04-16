import React, { createContext } from "react";
{
  /* Create a new context object using the `createContext` function provided by React. */
}
const NameContext = createContext();

function NameContextProvider({ children }) {
  const number = 12;

  return (
    <NameContext.provider value={{ number, string: "Hello" }}>
      {children}
    </NameContext.provider>
  );
  {
    /* The value property provides the values through the context. */
  }
}

export { NameContext, NameContextProvider };

{
  /** main.jsx */
}

import { NameContextProvider } from "fileContext";
import { Component } from "file";

export function Main() {
  return (
    <NameContextProvider>
      <Component />
    </NameContextProvider>
  );
}

{
  /** component.jsx */
}

import { useContext } from "react";
import { NameContext } from "fileContext";

export function Component() {
  const { number } = useContext(NameContext);
  return <h2>{number}</h2>;
}
