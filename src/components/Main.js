import React from "react";
import "../styles/main.css";
import meh from "../images/me.png";
import cv from '../others/cv.pdf'
export default function Main() {
  return (
    <>
      <div className="main">
        <div className="pic">
          <img className="me" src={meh} alt="" />
        </div>
        <div className="info">
          <h2>Hello, It's me...</h2>
          <h1>M.Chinmayananda</h1>
          <h2>
            and I am a <span>CS Student</span>
          </h2>
          <p>
            I'm a Student at KPRIT,Hyderabad graduating in computer science and
            trained in full stack web development.Worked on many projects.I'm
            passionate about developing attractive websites.
          </p>
          <button className="btn animate__animated animate__backInUp">
            <a href={cv} download>
              Download CV
            </a>
          </button>
        </div>
      </div>
      <div className="social ">
        <a href="" className="fa fa-facebook"></a>
        <a
          href="https://www.instagram.com/chinmayananda0720/?next=%2F"
          className="fa a fa-instagram"
        ></a>
        <a href="" className="fa b fa-twitter "></a>
        <a
          href="https://www.linkedin.com/in/chinmayananda-mandula-aa6a7425b/"
          className="fa fa-linkedin"
        ></a>
      </div>
    </>
  );
}
