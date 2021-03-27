import { useState, useReducer } from "react";

const reducer = (state, action) => {
  if (action.type === "plus") {
    return state + 1;
  } else {
    return state - 1;
  }
  // return state;
};

function Counter() {
  // const [count, setCount] = useState(0);
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <button onClick={() => dispatch({ type: "plus" })}>Plus</button>
      <h1>Count - {count}</h1>
      <button onClick={() => dispatch({ type: "minus" })}>Minus</button>
    </div>
  );
}

export default Counter;
