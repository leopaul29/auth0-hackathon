import React from "react";
import "./style.css";

function Funfact({ funfact }) {
  return (
    <div className="funfact" style={{ "background-color": "yellow" }}>
      {funfact}
    </div>
  );
}

export default Funfact;
