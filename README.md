# React useEffect Infinite Loop Bug

This repository demonstrates a common bug in React applications involving the `useEffect` hook: an infinite loop caused by a missing dependency in the dependency array.

## Bug Description

The `useEffect` hook, when used without a dependency array or with an incomplete dependency array, can lead to infinite re-renders.  This occurs when the effect's logic modifies a state variable that is also part of the component's render output, causing the effect to run repeatedly. In this example, the `count` variable is updated inside the effect, but it is not included in the dependency array, creating an infinite cycle.

## Bug Solution

To fix this, ensure the dependency array includes all state variables and props accessed within the `useEffect` function. In this case, including `count` in the dependency array will ensure that the effect runs only when the `count` changes, preventing the infinite loop.

## How to Reproduce

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4. Observe the console output and the continuous incrementing counter due to the infinite loop in `bug.js`
5. Examine `bugSolution.js` to see the corrected code.