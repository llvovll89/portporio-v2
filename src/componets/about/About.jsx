import React from "react";
import "./About.css";
import { FaAward, FaUserSecret, FaUniversity } from "react-icons/fa";
import AboutImg from "../../assets/img/about-img.png";

function About() {
  return (
    <>
      <section id="about">
        <div className="container about-container">
          <div className="titlebox">
            <h5>Kim Geon Ho</h5>
            <h2>About Me</h2>
          </div>
          <div className="about-content">
            <div className="about-img">
              <img src={AboutImg} alt="" />
            </div>
            <div className="infomation">
              <p className="info-text">
                &nbsp;안녕하세요😎 저는 신입 프론트엔드 개발자 김건호 입니다.
                꾸준한 성장을 하며 배우는 것에 두려워 하지 않고, 항상 증진하고
                도전하는 제가 되고 싶습니다. 저는 프론트엔드 개발자로 시작하여 ,
                머지 않은 미래에 풀스택 개발자가 되고 싶습니다. 제 이름을 건
                애플리케이션/유명 기업 웹 페이지 관리 등 하고싶은 것, 열정 많은
                사람입니다!
              </p>
              <a href="#contact" className="btn btn2">
                Conact
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
