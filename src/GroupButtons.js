import React from "react";
import { Link } from "react-router-dom";

function GroupButtons({ subject, id, groupsIDGrabber }) {
  function handleEditClick() {
    groupsIDGrabber(id);
  }
  return (
    <Link exact to="/study" onClick={handleEditClick}>
      <div className="group-border" onClick={handleEditClick}>
        <div className="group" onClick={handleEditClick}>
          {subject}

          {/* <button className="SE">S</button> */}
          {/* <button className="SE" onClick={handleEditClick}>
            S
          </button> */}
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
