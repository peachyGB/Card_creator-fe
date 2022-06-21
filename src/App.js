import React from "react";
// import { Switch, Route } from "react-router-dom";
import Groups from "./Groups";
import Header from "./Header";

function App() {
  return (
    <>
      <div className="App-Header">
        <Header />
      </div>
      <Groups />
    </>
  );
}

export default App;
