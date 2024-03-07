import React, { useState, useRef } from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
export default function Navbar(props) {
    const showslidebar=()=>{
        const sidebar =document.querySelector('.sidebar')
        sidebar.style.display="flex"
    }
    const slidebaroff=()=>{
        const sidebar =document.querySelector('.sidebar')
        sidebar.style.display="none"
    }
  return (
    <div>
      <nav className="my-3">
        <ul className="sidebar">
          <li onClick={slidebaroff}>
            <Link>
            <span className="material-symbols-outlined">
                close
            </span>
            </Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link
              to="/"
              style={{ color: "#00c2d1", textShadow: "0px 0px 16px" }}
            >
              PORTFOLIO
            </Link>
          </li>
          <li className="hide">
              
            {props.skills && <Link style={{ color: "#00c2d1", textShadow: "0px 0px 16px" }} to="/skills">Skills</Link>}
            {!props.skills && <Link  to="/skills">Skills</Link>}

          </li>
          <li className="hide">
          {props.projects && <Link style={{ color: "#00c2d1", textShadow: "0px 0px 16px" }} to="/projects">Projects</Link>}
            {!props.projects && <Link  to="/projects">Projects</Link>}
            
          </li>
          <li className="hide">
          {props.contact && <Link style={{ color: "#00c2d1", textShadow: "0px 0px 16px" }} to="/contact">Contact</Link>}
            {!props.contact && <Link  to="/contact">contact</Link>}
          </li>
          <li onClick={showslidebar}>
            <Link to="#">
              <span className="material-symbols-outlined">menu</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
