// import Ironman from "./components/Ironman";
// import Hulk from "./components/Hulk";
// import BlackWidow from "./components/BlackWidow";

import { Ironman, Hulk, BlackWidow, sample } from "./components/Avengers";

function App() {
  return (
    <div>
      <p>{sample}</p>
      <Ironman />
      <Hulk />
      <BlackWidow />
    </div>
  );
}

export default App;
