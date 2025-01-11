import { useState } from "react";

const ManagemantV2 = (props) => {
  const [count, setCount] = useState(0);
  const [secondCount, setSecondCount] = useState(1);
  return (
    <div>
      <div>Function based component</div>
      <p>{props?.name}</p>
      <p>{`Count : ${count}`}</p>
      <p>{secondCount}</p>
    </div>
  );
};

export default ManagemantV2;
