import React from "react";
import "./MainPage.css";
// import WAVE from "../../assets/img/wave.png";

function MainPage() {
  return (
    <>
      <div className="mainpage">
        <div className="dragon"></div>
        <span className="desc" id="desc1">Hi, Everyone !</span>
        <span className="desc" id="desc2">I`m Kim geon ho</span>
        <span className="desc" id="desc3">더위 조심하세요</span>
        <span className="desc" id="desc4">신입 프론트엔드 개발자</span>
        <div className="footer-wave">
          <div className="wave" id="wave1"></div>
          <div className="wave" id="wave2"></div>
          <div className="wave" id="wave3"></div>
          <div className="wave" id="wave4"></div>
        </div>
      </div>
    </>
  );
}

export default MainPage;
