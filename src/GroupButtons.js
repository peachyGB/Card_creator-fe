import React from "react";

function GroupButtons({ subject, id }) {
  return (
    <div className="group-border">
      <div className="group">
        {subject}
        <button className="SE">S</button>
        <button className="SE">E</button>
      </div>
    </div>
  );
}

export default GroupButtons;
