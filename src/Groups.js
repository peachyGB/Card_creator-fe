import React, { useEffect, useState } from "react";
import GroupButtons from "./GroupButtons";
//import subjects from "./TempData";

//Groups is the home page "/"
function Groups({ groupsIDGrabber }) {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/subjects")
      .then((r) => r.json())
      .then((data) => setSubjects(data));
  }, []);

  // renders a row for each grouping of cards
  const subjectDisplay = subjects.map((subject) => {
    return (
      <GroupButtons
        key={subject.id}
        id={subject.id}
        subject={subject.subject}
        groupsIDGrabber={groupsIDGrabber}
      />
    );
  });

  return (
    <div className="all-groups">
      <h2>My Card Decks</h2>
      <div className="btn-border">
        <div id="new-group-btn">+ Add New Deck</div>
      </div>
      <div>{subjectDisplay}</div>
    </div>
  );
}

export default Groups;
