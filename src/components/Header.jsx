import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constnats";
import { Link } from "react-router-dom";

const Header = () => {
  const [testVariable, setTestVariable] = useState("");
  useEffect(() => {
    console.log("UseEffect Header Called");
  }, [testVariable]);
  return (
    <div className="header">
      <div className="header-logo">
        <img height="70px" width="70px" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <p>
          {" "}
          <Link to={"/"}>Home</Link>
        </p>
        <p>
          {" "}
          <Link to="/about">About</Link>
        </p>
        <p>
          <Link to="/contact">Contact Us</Link>
        </p>
        <p>
          {" "}
          <Link to="">Cart</Link>
        </p>
        <p>
          <Link to="/grocery">Grocery</Link>
        </p>
        <button
          onClick={() => {
            setTestVariable("Changed");
          }}
        >
          Click Me
        </button>
      </div>
    </div>
  );
};

export default Header;
