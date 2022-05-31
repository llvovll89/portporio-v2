import "./Footer.css";
import { AiFillGithub, AiFillInstagram, AiFillMail } from "react-icons/ai";

import React from "react";

function Footer() {
  return (
    <div className="footer">
      <a href="#" className="footer-logo">
        Geon fire
      </a>

      <ul className="links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#project">Project</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer-social">
        <a href="https://github.com/llvovll89" target="_blank">
          <AiFillGithub />
        </a>
        <a href="https://www.instagram.com/ghgh9405/" target="_blank">
          <AiFillInstagram />
        </a>
        <a href="mailto:svvva5579@naver.com" target="_blank">
          <AiFillMail />
        </a>
      </div>
      <div className="footer-copy">
          <h4>&copy; Kim geon ho,  All rights reserved. </h4>
          <h5>이 포트폴리오는 React.Js로 제작 하였습니다.</h5>
      </div>
    </div>
  );
}

export default Footer;
