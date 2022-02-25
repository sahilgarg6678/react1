import React, { Component } from "react";
import style from "./style.module.css";
import "./external.css";

const sty = {
  textAlign: "center",
  color: "blue",
};

export class ClassCom extends Component {
  render() {
    return (
      <>
        <div className={`${style.box} ${style.box2}`}>
          <h1>This is created using class Component</h1>
          <p className="sec">This is done using external CSS</p>
          <p style={sty}>This is done using inline CSS</p>
        </div>
      </>
    );
  }
}

export default ClassCom;
