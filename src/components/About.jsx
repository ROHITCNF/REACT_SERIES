import Management from "./Management";
import ManagemantV2 from "./ManagemantV2";
import React from "react";
import Parent from "./liftState/Parent";

class About extends React.Component {
  constructor(props) {
    console.log("Parent Constructore called");
    super(props);
  }

  componentDidMount() {
    console.log("Parent comp did mount");
  }
  render() {
    console.log("Parent render called");

    return (
      <div>
        <h2>About Page</h2>
        <Parent />
        {/* <Management name={"testName"} /> */}
      </div>
    );
  }
}

export default About;
