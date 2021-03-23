import { Ironman, BlackWidow, Hulk } from "./components/Avengers";

const IronManObject = {
  name: "Iron man",
  realName: "RDJ",
};

function App() {
  return (
    <div>
      <Ironman IronManObject={IronManObject} />
      <Hulk name={"I am Hulk"} />
      <BlackWidow name={"I am Black Widow"} />
    </div>
  );
}

export default App;
