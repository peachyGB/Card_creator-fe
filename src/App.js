import React, { useState } from "react";
import EditCard from "./EditCard";
import { Switch, Route } from "react-router-dom";
import Groups from "./Groups";
import Header from "./Header";
import Study from "./Study";

function App() {
  const [currentCards, setCurrentCards] = useState([]);

  // gets a list of all cards for the div that was clicked on based on its ID
  function groupsIDGrabber(id) {
    fetch(`http://localhost:9292/subjects/${id}/cards`)
      .then((r) => r.json())
      .then((data) => setCurrentCards(data));
  }

  return (
    <>
      <div className="App-Header">
        <Header />
      </div>

      <Switch>
        <Route exact path="/edit">
          <EditCard currentCards={currentCards} />
        </Route>
        <Route exact path="/study">
          <Study />
        </Route>
        <Route exact path="/">
          <Groups groupsIDGrabber={groupsIDGrabber} />
        </Route>
      </Switch>
    </>
  );
}

export default App;
