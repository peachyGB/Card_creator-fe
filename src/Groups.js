import React from "react";
import EditCard from "./EditCard";
import GroupButtons from "./GroupButtons";
import Study from "./Study";
import subjects from "./TempData";

//Groups is the home page "/"

function Groups() {
  // renders a row for each grouping of cards
  const subjectDisplay = subjects.map((subject) => {
    return (
      <GroupButtons key={subject.id} id={subject.id} subject={subject.title} />
    );
  });
  function toEditor() {}
  return (
    <div className="all-groups">
      <h2>My Card Decks</h2>
      <div className="btn-border" onClick={toEditor}>
        <div id="new-group-btn">+ Add New Deck</div>
      </div>
      <div>{subjectDisplay}</div>
    </div>
  );
}

export default Groups;
