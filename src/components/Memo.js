import { useState, useMemo } from "react";

function getRandomNumber() {
  console.log("function called");

  let randomNumber = "";
  for (let index = 0; index < 100000000; index++) {
    if (index === 99999999) {
      randomNumber = Math.random();
    }
  }
  return randomNumber;
}

function Memo() {
  const [reRender, setReRender] = useState();
  const [changeIt, setChangeIt] = useState();

  console.log("rerendered");

  const randomNum = useMemo(() => getRandomNumber(), [changeIt]);

  return (
    <div>
      <h1>{randomNum}</h1>
      <button onClick={() => setReRender(Math.random())}>Rerender</button>
      <button onClick={() => setChangeIt(Math.random())}>Changeit</button>
    </div>
  );
}

export default Memo;
