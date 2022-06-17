// State and Rendering
// useTransition
// useTransition cons
// useDeferredValue

import React from "react";

// function App() {
//   const [input, setInput] = React.useState("");
//   const [list, setList] = React.useState([]);
//   const [isLoading, startTransition] = React.useTransition();

//   const handleChange = (e) => {
//     const value = e.target.value;
//     setInput(value);

//     const late = 20000;
//     const listItems = [];
//     for (let i = 0; i < late; i++) {
//       listItems.push(value);
//     }
//     startTransition(() => {
//       setList(listItems);
//     });
//   };

//   console.log("rendered")

//   return (
//     <div className='max-w-7xl mx-auto mt-4'>
//       <input
//         className='bg-gray-200 text-green-500 border border-green-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-green-500'
//         value={input}
//         onChange={handleChange}
//       />

//       {isLoading ? (
//         <div className='animate-bounce'>Loading..</div>
//       ) : (
//         <article>
//           {list.map((item, i) => (
//             <div className='p-4 bg-green-400 m-2 inline-block'>{item}</div>
//           ))}
//         </article>
//       )}
//     </div>
//   );
// }

// export default App;

function App() {
  const [input, setInput] = React.useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);
  };

  const deferredInput = React.useDeferredValue(input);

  const list = React.useMemo(() => {
    const late = 10000;
    const listItems = [];
    for (let i = 0; i < late; i++) {
      listItems.push(deferredInput);
    }
    return listItems;
  }, [deferredInput]);

  console.log(`Input - ${input} || DeferredInput ${deferredInput}`);

  return (
    <div className='max-w-7xl mx-auto mt-4'>
      <input
        className='bg-gray-200 text-green-500 border border-green-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-green-500'
        value={input}
        onChange={handleChange}
      />

      <article>
        {list.map((item, i) => (
          <div className='p-4 bg-green-400 m-2 inline-block'>{item}</div>
        ))}
      </article>
    </div>
  );
}

export default App;
