import React from "react";

function Navbar({ color }) {
  return (
    <>
      <nav style={{ backgroundColor: color }}>
        <h1>Navbar of {color}</h1>
      </nav>
    </>
  );
}

export default Navbar;
