import useInput from "../hooks/useInput";

function MyInput() {
  const [name, nameAttri] = useInput("name", "");
  const [age, ageAttri] = useInput("age", 0);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert(`${name} is ${age} years old`);
      }}>
      {/* <pre>
        {name}
        {age}
      </pre> */}
      <div>
        <label style={{ marginRight: 5 }} htmlFor=''>
          Name
        </label>
        <input {...nameAttri} style={{ marginTop: 5 }} type='text' />
      </div>

      <div>
        <label style={{ marginRight: 5 }} htmlFor=''>
          Age
        </label>
        <input style={{ marginTop: 5 }} type='number' {...ageAttri} />
      </div>
      <button style={{ marginTop: 5 }}>Submit</button>
    </form>
  );
}

export default MyInput;
