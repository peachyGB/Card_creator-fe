import React from "react";
import EditCard from "./EditCard";
import NewCard from "./NewCard";
import Study from "./Study";
import subjects from "./TempData";

//Groups is the home page "/"

function Groups() {
  //for each subject return
  const subjectDisplay = subjects.map((subject) => {
    return (
      <div className="group-border" key={subject.id}>
        <div className="group"> {subject.title} </div>
      </div>
    );
  });

  return (
    <div className="all-groups">
      <h2>My Card Decks</h2>
      <div className="btn-border">
        <div id="new-group-btn">+ Add New Deck</div>
      </div>
      <div>{subjectDisplay}</div>
      <NewCard />
      <EditCard />
      <Study />
    </div>
  );
}

export default Groups;
