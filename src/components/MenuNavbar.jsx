import React, { useState } from "react";

import hambuergerMenu from "../assets/icon-button/hamburger-menu.svg";
import "../style-components/MenuNavbar.css";

function MenuNavbar({ setEstateContet }) {
  const [stateMenu, setStateMenu] = useState(true);
  const handle = (event) => {
    if (stateMenu == true) {
      setStateMenu(false);
      setEstateContet(false);
    } else {
      setStateMenu(true);
      setEstateContet(true);
    }
  };

  return (
    <div>
      <button className="button-menu" onClick={handle}>
        <img src={hambuergerMenu} alt="" />
      </button>
      <div className={`content-menu ${stateMenu ? "active" : ""}`}>
        <ul className="list-menu">
          <li className="item-menu">Home</li>
          <li className="item-menu">About</li>
          <li className="item-menu">Info</li>
        </ul>
      </div>
    </div>
  );
}

export default MenuNavbar;
