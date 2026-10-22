// src/exercises/lesson-03/BugMutatedState.jsx

/*
  BUG #2 — State Issue

  This component displays a count and updates it when the button is clicked.
  However, the way the count is being changed causes the component to behave
  incorrectly.
*/

import { useState } from 'react';
export default function BugMutatedState() {
  const [count, setCount] = useState(0);

  function handleAdd() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>Bug 2 Count: {count}</p>
      <button onClick={handleAdd}>Add 1</button>
    </div>
  );
}

// Explanation:
// The bug: count++ changed the state variable directly, which is a mutation.
// React does not track direct changes, so state must only be updated
// through the setter function. Also, let was used so the variable could be reassigned.
// The fix: I changed let to const, removed count++,
// and called setCount(count + 1) to create a new value.
