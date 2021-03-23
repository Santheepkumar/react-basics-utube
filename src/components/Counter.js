import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Plus</button>
      <h1>Count - {count}</h1>
      <button onClick={() => setCount(count - 1)}>Minus</button>
    </div>
  );
}

export default Counter;
