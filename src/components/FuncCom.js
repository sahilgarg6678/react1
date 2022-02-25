import React from "react";
import style from "./style.module.css";
import "./external.css";

const sty = {
  textAlign: "center",
  color: "blue",
};

function Functional() {
  return (
    <>
      <div className={`${style.box} ${style.box1}`}>
        <h1>This is created using functional Component</h1>
        <p className="sec">This is done using external css</p>
        <p style={sty}>This is done using inline CSS</p>
      </div>
    </>
  );
}

export default Functional;
