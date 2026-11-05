// TOPIC: StrictMode Effects and Cleanup
// TASK: Notice how the count increments incorrectly based on the `setInterval` logic. Fix the useEffect so that the counter increments correctly.

import { useEffect, useState } from 'react';

export default function BugStrictMode() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <h2>StrictMode Timer Bug</h2>
      <p>Count: {count}</p>
    </div>
  );
}

// Write your explanation of how StrictMode helps us catch this bug
// In development, StrictMode runs every effect as mount -> unmount -> mount.
// The original effect had no cleanup, so the first interval was never cleared
// and two intervals ran at the same time, adding 2 every second.
// Returning a cleanup function that calls clearInterval stops the first
// interval before the second one starts, so only one interval is left.
// Without StrictMode this leak would only appear later, for example when the
// component unmounts and mounts again during navigation.
