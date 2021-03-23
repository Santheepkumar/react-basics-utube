function BlackWidow({ name }) {
  return <div>{name}</div>;
}

function Hulk(props) {
  const { name } = props;
  return <div>{name}</div>;
}

function Ironman({ IronManObject }) {
  console.log(IronManObject);

  return (
    <div>
      {IronManObject.name} - {IronManObject.realName}
    </div>
  );
}

// Muliple Export
export { Ironman, BlackWidow, Hulk };
