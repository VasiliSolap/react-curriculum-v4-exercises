import { useState } from 'react';
import Child from './Child';

export default function Parent() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  return (
    <div>
      <h2>Parent-Child Communication</h2>
      <p>Counter: {count}</p>
      <Child onIncrement={increment} />
    </div>
  );
}

// Explanation:
// Props only flow down, so Child cannot change Parent's state directly.
// Parent keeps the state and passes its increment function to Child as the
// onIncrement prop. Child calls it on click, setCount runs in Parent and
// Parent re-renders with the new counter.
