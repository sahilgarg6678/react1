// import React from "react";
import ClassCom from "./ClassCom";
import Functional from "./FuncCom";
import style from "./style.module.css";

import React, { Component } from "react";

export class Hello extends Component {
  state = {
    classV: false,
    funcV: false,
  };
  render() {
    return (
      <>
        <h1 className={style.head}>
          Styling using Functional and Class Component
        </h1>
        <div id={style.main}>
          <span
            id={style.left}
            onClick={() => this.setState({ funcV: !this.state.funcV })}
          >
            To see styling in functional component
          </span>
          <span
            id={style.right}
            onClick={() => this.setState({ classV: !this.state.classV })}
          >
            To see styling in class component
          </span>
          <div id={style.cont}>
            {this.state.funcV && <Functional />}
            {this.state.classV && <ClassCom />}
          </div>
        </div>
      </>
    );
  }
}
