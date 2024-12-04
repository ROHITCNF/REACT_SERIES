import React from "react";
import ReactDOM from "react-dom/client";

//const heading = React.createElement("h1", {}, "Hi From the react"); // React objcet (element)
//create root to render react elements

//React element
const jsxHeading = <h1>Hi From React By JSX</h1>; // BTS :- React.createElement() ---> HTml
// Browser don't understand this ^^ code   [Parsel is parsing this to make it browser can understand.]

//React component
//1. Class based component [OLD]

//2. Functional Component  [NEW] : JS function which returns some piece of JSX;
const TitleComp = () => (
  <div>
    <h2>Title componet</h2>
  </div>
);
const HeadingComponent = () => (
  <div>
    <h1> Hi from component</h1>
  </div>
);

const reactElement = <span>React Element</span>;
const headingReactElement = (
  <h1 id="">
    {HeadingComponent()}
    <HeadingComponent />
    <HeadingComponent></HeadingComponent>
  </h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(headingReactElement);
