import { useEffect, useState } from "react";

const sampleData = [
  { name: "santheep", age: 22, friends: "100+", gf: 0 },
  { name: "honey", age: 22, friends: "100+", gf: 10 },
  { name: "honeybee", age: 22, friends: "100+", gf: 10 },
  { name: "honeyhoo", age: 22, friends: "100+", gf: 10 },
  { name: "honeydooo", age: 22, friends: "100+", gf: 10 },
];

function Table() {
  const [data, setData] = useState([]);
  const [change, setChange] = useState();

  useEffect(() => {
    console.log("use Effect Called");

    setTimeout(() => {
      setData(sampleData);
    }, 2000);
  }, [change]);

  useEffect(() => {
    setTimeout(() => {
      setChange(Math.random());
    }, 5000);
  }, []);

  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Friends</th>
        <th>Girl friends</th>
      </tr>
      {data.length === 0 && <td>Loading....</td>}
      {data.map((dat) => (
        <tr>
          <td>{dat.name}</td>
          <td>{dat.age}</td>
          <td>{dat.friends}</td>
          <td>{dat.gf}</td>
        </tr>
      ))}
    </table>
  );
}

export default Table;
