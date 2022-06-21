import React from "react";
import EditCard from "./EditCard";
import { Switch, Route } from "react-router-dom";
import Groups from "./Groups";
import Header from "./Header";
import Study from "./Study";

function App() {
  return (
    <>
      <div className="App-Header">
        <Header />
      </div>

      <Switch>
        <Route exact path="/edit">
          <EditCard />
        </Route>
        <Route exact path="/study">
          <Study />
        </Route>
        <Route exact path="/">
          <Groups />
        </Route>
      </Switch>
    </>
  );
}

export default App;
