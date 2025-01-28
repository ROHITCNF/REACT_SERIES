import React, { useContext, useState } from "react";
import { listState } from "../../utils/constnats";
import Child from "./Child";
import UserContext from "../../utils/UserContext";
const Parent = () => {
  const [testIndex, setTestIndex] = useState(null);

  const contextData = useContext(UserContext);
  return (
    <UserContext.Provider value={{ loggedInUser: undefined }}>
      <div>
        <p>loggedInUser : {contextData.loggedInUser ? "test" : "false"}</p>
        Parent Comp
        <div>
          {listState.map((val, index) => {
            return (
              <Child
                data={val}
                setTestIndex={() => setTestIndex(index)}
                logItems={index === testIndex ? true : false}
              />
            );
          })}
        </div>
      </div>
    </UserContext.Provider>
  );
};

export default Parent;
