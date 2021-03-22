function App() {
  const intro = "Hello reactjs";
  return (
    <div>
      <h1>{intro}</h1>
    </div>
  );
  // return React.createElement(
  //   "div",
  //   null,
  //   React.createElement("h1", null, intro)
  // );
}

export default App;
