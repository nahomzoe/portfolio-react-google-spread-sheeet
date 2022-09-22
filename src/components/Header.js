import React from "react";
import Nav from "./Nav";

const Header = () => {
  return (
    <div style={{ marginBottom: "9rem" }}>
      <Nav />

      <div className="p-5 text-center bg-light">
        <h1 className="mb-3">Nahom G.Asfaw</h1>
        <h4 className="mb-3">Junior Web Developer</h4>
        {/* <a className="btn btn-primary" href="" role="button">
         
        </a> */}
      </div>
    </div>
  );
};

export default Header;
