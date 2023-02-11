import "./App.css";
import React from "react";
import Navbar from "./Navbar/Navbar";
import Main from "./Main/Main";
import Login from "./Main/Login";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Login />
    </div>
  );
}

export default App;
