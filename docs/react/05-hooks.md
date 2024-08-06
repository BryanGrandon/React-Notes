# Hooks

Hooks are a React API that allows us to have state, and other React features, in components created with a function

## _Basic Hooks_

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
