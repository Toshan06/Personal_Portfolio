import "../css/hero.css";
import React from "react";
import { Link } from "react-router-dom";


function Hero() {
  return (
    <div className="hero">
      <div className="mask">
        <img className="Hero-Img" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29kaW5nfGVufDB8fDB8fHww" alt="back-img" />
      </div>
      <div className="content">
        <h2 className='Intro1 bg-clip-text text-transparent bg-gradient-to-r from-purple-700 via-blue-500 to-purple-700 font-bold'>Hi, myself<br/>TOSHAN MANDAL</h2>
        <p className="Intro2">Web Developer | ML Enthusiast</p>
        <div>
          <Link to="/skills" className="btn">
            SKILLS
          </Link>
          <Link to="/contacts" className="btn btn-light">
            CONTACTS
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
