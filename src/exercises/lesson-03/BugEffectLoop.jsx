//src/exercises/lesson-03/BugEffectLoop.jsx

/* 
  BUG #1 — Effect Issue 

  This component uses useState and useEffect to update a value.
  The effect is running on every render, which causes the
  component to behave incorrectly.
  */

import { useEffect, useState } from 'react';

export default function BugEffectLoop() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count + 1);
  }, []);

  return <p>Bug 1 Count: {count}</p>;
}

// Explanation:
// The bug: useEffect had no dependency array, so the effect ran after every render.
// Inside the effect, setCount changed the state, which caused a new render,
// which ran the effect again — an infinite loop.
// The fix: I added an empty dependency array [] so the effect runs only once,
// when the component first mounts.
