// import useReact from "./hooks/useReact";
import MyInput from "./components/MyInput";

function App() {
  // const { useState, useEffect } = useReact();
  // const [state, setstate] = useState("Santheep");

  // console.log(state);
  // useEffect(() => {
  //   setstate("Honey");
  // }, []);

  return (
    <div>
      {/* <h1>{state}</h1> */}

      <MyInput />
    </div>
  );
}

export default App;
