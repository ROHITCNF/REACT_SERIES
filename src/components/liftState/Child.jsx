import React from "react";

const Child = (props) => {
  console.log("Child Component is called");

  console.log(props);

  const { data, setTestIndex, logItems } = props;
  return (
    <div>
      <p onClick={setTestIndex}>{data} Logging</p>
      <div>{logItems && `Child Component ${data}`}</div>
    </div>
  );
};

export default Child;
