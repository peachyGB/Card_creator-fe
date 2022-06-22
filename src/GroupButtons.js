import React from "react";
import { Link } from "react-router-dom";

function GroupButtons({ subject, id, groupsIDGrabber }) {
  function handleEditClick() {
    groupsIDGrabber(id);
  }
  return (
    <div className="group-border">
      <div className="group">
        {subject}
        <Link exact to="/study">
          <button className="SE">S</button>
        </Link>

        <Link exact to="/edit">
          <button className="SE" onClick={handleEditClick}>
            E
          </button>
        </Link>
      </div>
    </div>
  );
}

export default GroupButtons;
