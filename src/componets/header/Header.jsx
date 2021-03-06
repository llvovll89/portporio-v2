import "./Header.css";
import React from "react";
import ContactBtn from "./ContactBtn";
import Info from "../../assets/img/main1.gif";
import HeaderSocial from "./HeaderSocial";

function Header() {
  return (
    <header>
      <div className="container header-container">
        <div className="title">
          <h5>WELCOME TO MY π</h5>
          <h1>PORTFOLIO π</h1>
          <h5 className="text-light">μ μ ν¬νΈν΄λ¦¬μ€μ μ€μ κ±Έ νμν©λλ€.</h5>
        </div>
        <ContactBtn />
        <HeaderSocial />

        {/* <div className="info">
          <img src={Info} alt="Geon ho Kim" />
        </div>
  */}
        <a href="#contact" className="scroll-down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header;
