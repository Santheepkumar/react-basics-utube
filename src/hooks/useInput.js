import { useState } from "react";

function useInput(inputName, initialValue) {
  const [value, setValue] = useState(initialValue);

  return [
    value,
    {
      name: inputName,
      onChange: (e) => setValue(e.target.value),
      value,
    },
  ];
}

export default useInput;
