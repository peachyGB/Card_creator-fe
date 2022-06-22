import React, { useState } from "react";

function EditCard({ currentCards }) {
  const [frontText, setFrontText] = useState("");
  const [backText, setBackText] = useState("");

  //populates the Existing Cards box with mini cards
  let existingCards = currentCards.map((card) => {
    return (
      <>
        <div className="mini-card">{card.front}</div>
        <button>D</button>
      </>
    );
  });
  //captures subject id that will be used in the new card
  // ternary prevents error and broken page
  let subj = currentCards.length !== 0 ? currentCards[0].subject_id : 0;

  //posts new card to backend and adds to box of existing cards
  function submitN(e) {
    e.preventDefault();
    const newCard = {
      front: frontText,
      back: backText,
      student_id: 5,
      subject_id: subj,
    };
    handlePost(newCard);
  }

  function handlePost(newCard) {
    fetch("http://localhost:9292/cards", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCard),
    })
      .then((r) => r.json())
      .then((data) => console.log(data));
    setFrontText("");
    setBackText("");
  }

  return (
    <div>
      <h2>Edit Cards</h2>
      <div className="flexer">
        <div id="existing-cards">Cards{existingCards}</div>
        <form onSubmit={submitN}>
          <div className="editor-cards" id="card-front">
            <input
              type="text"
              id="front"
              name="front"
              value={frontText}
              onChange={(e) => setFrontText(e.target.value)}
            ></input>
            <label for="front">Front</label>
          </div>
          <div className="editor-cards" id="card-back">
            <input
              type="text"
              id="back"
              name="back"
              value={backText}
              onChange={(e) => setBackText(e.target.value)}
            ></input>
            <label for="back">Back</label>
          </div>
          <input id="save-new" type="submit" value="Save + New"></input>
        </form>
      </div>
    </div>
  );
}

export default EditCard;
