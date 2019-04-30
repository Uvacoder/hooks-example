This repository contains examples for a presentation on React Hooks.

Hooks covered:
- useState
- useEffect

## useState

- Use State allows you to create stateful functional components
- It has the following syntax: `const [value, setValue] = useState('defaultValue')` where the first element is the state variable and the second is a method used to update the state
- To update the state, simply call `setValue` and pass the new state value as parameter, which enqueues a re-render of the component

## useEffect

- Use effect allows us to have lifecycle hooks in functional components
- It has the following syntax: `useEffect(callback, (optional) [variable])` where the first argument is the method that is executed on each re-render and the second are variables that trigger the method only when they are updated
- The second parameter allows us to control the firing of `useEffect`, by passing it `[]`, we will only trigger in twice: on mount and on unmount. We may also pass variables, which will then trigger `useEffect` only when said variables are updated. If no parameter is passed, the method is triggered on **each** re-render
