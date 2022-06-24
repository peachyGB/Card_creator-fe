import React from "react";
import { Link } from "react-router-dom";

function GroupButtons({ subject, id, groupsIDGrabber }) {
  function handleEditClick() {
    groupsIDGrabber(id);
  }
  return (
    <Link exact to="/study">
      <div className="group-border">
        <div className="group">
          {subject}

          {/* <button className="SE">S</button> */}

          <Link exact to="/edit">
            <button className="SE" onClick={handleEditClick}>
              E
            </button>
          </Link>
        </div>
      </div>
    </Link>
  );
}

export default GroupButtons;
