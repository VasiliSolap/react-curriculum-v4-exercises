// TOPIC: Correct useRef usage to control DOM elements
// TASK: Implement focusing an input field when the button is clicked.
import { useRef } from 'react';

export default function FillRefFocus() {
  const inputRef = useRef(null);

  function focusInput() {
    inputRef.current.focus();
  }

  return (
    <div>
      <h2>useRef: Focusing an Input</h2>

      <input ref={inputRef} type="text" placeholder="Type here..." />

      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

// Explanation:
// Passing inputRef to the input's ref prop makes React put the input's DOM
// node into inputRef.current after the first render.
// In the click handler we call the DOM method focus() on that node, so the
// cursor moves into the input. Focus is not something we show with state,
// so a ref is the right tool here.
