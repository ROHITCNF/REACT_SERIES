import React from "react";

class Management extends React.Component {
  constructor(props) {
    console.log("Child constructor called");

    super(props);
    this.state = {
      userData: {
        name: "test",
        login: "username",
        user_view_type: "Private",
        avatar_url: "../",
      },
    };
  }
  async componentDidMount() {
    const apiData = await fetch("https://api.github.com/users/rohitcnf");
    const data = await apiData.json();
    this.setState({
      userData: data,
    });
    console.log("API DATA", data);

    console.log("Child comp did mount");
  }
  componentDidUpdate() {
    console.log("Child component Did Update");
  }
  componentWillUnmount() {
    console.log("Child comp Will unmount");
  }
  render() {
    console.log("Child render called");
    const currentUserData = this.state?.userData;

    //In Class based  inside render method returns the code
    return (
      <div>
        <div>class Based component</div>
        <p>{currentUserData?.name}</p>
        <p>{currentUserData?.login}</p>
        <p>{currentUserData?.user_view_type}</p>
        <img height="50px" width="50px" src={currentUserData?.avatar_url} />
      </div>
    );
  }
}

export default Management;
