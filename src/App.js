import React, { useEffect, useState } from "react";
import SignUpFormik from "./SignUpFormik";
import SignUpRHF from "./SignUpRHF";
import "./styles.css";

// Challenge:
// Requirements:
// 0. Refactor this component to be a functional component
// 1. You should be able to switch from RHF and Formik within local state
// 2. Initial state shoud be null. After 2 seg App component get mounted, RHF is showed
// If you are feeling lost:
// 0. Remove class syntax and organize your logic
// 1. Define local state using hooks
// 2. Define handler function to set state when button is clicked
// 3. Define setTimeOut when component mounts to set RHF after 2 seg

// Then go to SignUpRHF and refactor Formik way into RHF

export default class App extends React.Component {
  render() {
    const formEngine = null;
    const renderMap = {
      RHF: <SignUpRHF />,
      Formik: <SignUpFormik />
    };
    return (
      <div className="App">
        <h1>Workshop # 4 React Hooks Introduction</h1>
        <div style={{ display: "flex", gap: "20px" }}>
          <button>RHF</button>
          <button>Formik</button>
        </div>
        {renderMap[formEngine]}
      </div>
    );
  }
}
