import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <Link exact to="/">
        <div>Study Deck</div>
      </Link>
    </div>
  );
}

export default Header;
