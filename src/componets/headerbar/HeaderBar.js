import "./HeaderBar.css";
import "../../index.css";
import Logo from "../../assets/img/header-btn(remove).png";

import React from "react";

function HeaderBar() {
  return (
    <div className="fixed-bar">
      <div className="header-bar">
        <div className="logo-bar">
          <a href="#">
            <img src={Logo} className="logo-img"></img>
          </a>
        </div>
        <div className="nav-bar">
          <ul className="nav-list">
            <li>
              <a href="#about">
                01 <br />
                <span>ABOUT</span>
              </a>
            </li>
            <li>
              <a href="#project">
                02 <br />
                <span>PROJECT</span>
              </a>
            </li>
            <li>
              <a href="#contact">
                03 <br />
                <span>CONTACT</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HeaderBar;
