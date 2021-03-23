function BlackWidow() {
  return <div>Black Widow</div>;
}

function Hulk() {
  return <div>Hulk</div>;
}

function Ironman() {
  return <div>Iron man</div>;
}

function Avenge(params) {
  return <div>This is default export</div>;
}

const MyString = "Hello Its exported string";

// Muliple Export
export { Ironman, BlackWidow, Hulk, MyString };

// Default Export
export default Avenge;
