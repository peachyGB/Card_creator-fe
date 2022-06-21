import React from "react";

function EditCard() {
  return (
    <div>
      <h2>Edit Cards</h2>
      <div className="flexer">
        <div id="existing-cards">Cards</div>
        <form>
          <div className="editor-cards" id="card-front">
            <input type="text" id="front" name="front" value=""></input>
            <label for="front">Front</label>
          </div>
          <div className="editor-cards" id="card-back">
            <input type="text" id="back" name="back" value=""></input>
            <label for="back">Back</label>
          </div>
          <input id="save-new" type="submit" value="Save + New"></input>
          <input id="save-end" type="submit" value="Save + End"></input>
        </form>
      </div>
    </div>
  );
}

export default EditCard;
