// import Ironman from "./components/Ironman";
// import Hulk from "./components/Hulk";
// import BlackWidow from "./components/BlackWidow";

// Default and Multiple Imports
import Avenge, {
  Ironman,
  BlackWidow,
  Hulk,
  MyString,
} from "./components/Avengers";

function App() {
  return (
    <div>
      <h1>{MyString}</h1>
      <Ironman />
      <Hulk />
      <BlackWidow />
      <Avenge />
    </div>
  );
}

export default App;
