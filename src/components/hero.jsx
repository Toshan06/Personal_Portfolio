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
        <h2 className='Intro1 bg-clip-text text-2xl md:text-4xl pb-4 text-transparent bg-gradient-to-r from-purple-700 via-blue-500 to-purple-700 font-bold'>Hi, myself<br/>TOSHAN MANDAL</h2>
        <p className="Intro2 text-xl md:text-3xl md:font-bold">Web Developer | ML Enthusiast</p>
        <div className="flex flex-row gap-2">
          <Link to="/skills" className="btn hover:bg-green-500 hover:text-white ease-in-out duration-500 hover:transform hover:translate-y-1 hover: scale-105 bg-[rgb(255,255,0)] text-black border-2 px-3 py-2 font-semibold text-lg">
            SKILLS
          </Link>
          <Link to="/contacts" className="btn btn-light hover:bg-green-500 text-white ease-in-out duration-500 hover:transform hover:translate-y-1 hover: scale-105 bg-transparent text-black border-2 px-3 py-2 font-semibold text-lg">
            CONTACTS
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
