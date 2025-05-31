import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  
    const [click,setClick] = useState(false)
    function handleClick(){
        setClick(!click)
    }
    const [color,setColor] =  useState(false)
    const changeColor = () => {
      if(window.scrollY >= 100){
        setColor(true)
      }else{
        setColor(false)
      }
    }
    window.addEventListener('scroll',changeColor)
  
    return (
    <div className={color ? 'navbar navbar-bg' : 'navbar'}>
      <div className="logo">
        <Link to="/">
          <h1 className="font-extrabold">TM</h1>
        </Link>
      </div>
      <ul className={click?'nav-menu text-white':'text-white nav-menu active'}>
        <li className="nav-list">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-list">
          <Link to="/projects">Projects</Link>
        </li>
        <li className="nav-list">
          <Link to="/resume">Resume</Link>
        </li>
        <li className="nav-list">
          <Link to="/skills">Skills</Link>
        </li>
        <li className="nav-list">
          <Link to="/contacts">Contacts</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? <FaBars size={20} style={{ color: "white" }}/> : <FaTimes size={20} style={{ color: "white" }}/>}
      </div>
    </div>
  );
}

export default Navbar;
