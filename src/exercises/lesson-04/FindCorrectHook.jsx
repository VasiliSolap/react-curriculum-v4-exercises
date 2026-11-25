// TOPIC: Choose the correct tool: useRef vs useState
// TASK: Make sure it updates the text *without* triggering a re-render
import { useState } from 'react';

export default function FindCorrectHook() {
  const [clickCount, setClickCount] = useState(0);

  function handleClick() {
    setClickCount((previous) => previous + 1);
  }

  return (
    <div>
      <h2>useRef vs useState Decision</h2>
      <button onClick={handleClick}>{clickCount} Clicks</button>
    </div>
  );
}

// Explanation:
// A plain `let` variable is reset to 0 on every render and changing it does not
// tell React to re-render, so the button text never changed.
// useRef would keep the value between renders, but changing ref.current also
// does not trigger a re-render, so the button would still show the old number.
// The click count is shown in the UI, so it belongs in state: useState keeps
// the value and its setter re-renders the button with the new count.
