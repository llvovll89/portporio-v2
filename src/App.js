import React from "react";
import Header from "./componets/header/Header";
import Nav from "./componets/nav/Nav";
import About from "./componets/about/About";
import Project from "./componets/projects/Project";
import Contact from "./componets/contact/Contact";
import Footer from "./componets/footer/Footer";
import HeaderBar from "./componets/headerbar/HeaderBar";
import ScrollNum from "./componets/scrollnumber/ScrollNum";
import Main from './componets/main/MainPage';
// import { useEffect, useRef } from 'react';



function App() {


  return (
    <>
      <Main />
      <HeaderBar />
      <Header />
      <Nav />
      <About />
      <Project />
      <Contact />
      <Footer />
      <ScrollNum />
    </>
  );
}

export default App;
