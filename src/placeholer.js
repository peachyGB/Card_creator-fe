import React, { useEffect, useState } from "react";
import GroupButtons from "./GroupButtons";
//import subjects from "./TempData";

//Groups is the home page "/"
function Groups({ groupsIDGrabber }) {
  const [subjects, setSubjects] = useState([]);
  const [addGroupHidden, setAddGroupHidden] = useState(true);
  const [newGroupName, setNewGroupName] = useState("");

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
  function handleGroupNameSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:9292/subjects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ subject: newGroupName }),
    })
      .then((r) => r.json())
      .then((data) => setSubjects([...subjects, data]));
    setNewGroupName("");
    setAddGroupHidden(!addGroupHidden);
  }

  return (
    <div className="all-groups">
      <h2>My Card Decks</h2>
      <div className="btn-border">
        <div id="new-group-btn" onClick={setAddGroupHidden(!addGroupHidden)}>
          + Add New Deck
        </div>
      </div>
      <div id="add-group">
        <form onSubmit={handleGroupNameSubmit}>
          <label for="group-name">New Group Name: </label>
          <input
            type="text"
            id="group-name"
            name="group-name"
            value={newGroupName}
            onChange={(e) => setNewGroupName(e.target.value)}
          ></input>
          <input type="submit" value="Add"></input>
        </form>
      </div>
      <div>{subjectDisplay}</div>
    </div>
  );
}

export default Groups;
