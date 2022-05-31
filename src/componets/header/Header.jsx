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
          <h5>WELCOME TO MY 🙌</h5>
          <h1>PORTFOLIO 😁</h1>
          <h5 className="text-light">저의 포트폴리오에 오신걸 환영합니다.</h5>
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
