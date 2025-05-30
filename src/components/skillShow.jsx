import React from "react";
import {
  IoLogoJavascript,
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoReact,
  IoLogoPython,
} from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoMongodb } from "react-icons/bi";

const SkillShow = () => {
  return (
    <div className="max-w-full flex flex-col gap-16 text-2xl justify-center items-center p-20 bg-gradient-to-b from-gray-900 to-blue-900">
      <h2 className="text-5xl bg-clip-text text-transparent bg-gradient-to-r from-purple-700 via-blue-500 to-purple-700 font-bold">
        MY SKILLS
      </h2>
      <div className="skill-container text-md md:text-2xl grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-content-center gap-8 text-white">
        <a
          href="https://en.wikipedia.org/wiki/HTML"
          className="block overflow-hidden flex justify-center bg-blue-900 p-10 rounded-2xl border cursor-default hover:bg-blue-800 hover:shadow-md hover:shadow-blue-700 ease-in-out duration-500 transform hover:translate-y-1 hover: scale-105"
        >
          <IoLogoHtml5 className="text-5xl" color="rgb(229,77,38)" />
        </a>

        <a
          href="https://en.wikipedia.org/wiki/CSS"
          className="block overflow-hidden flex justify-center bg-blue-900 p-10 rounded-2xl border cursor-default hover:bg-blue-800 hover:shadow-md hover:shadow-blue-700 ease-in-out duration-500 transform hover:translate-y-1 hover: scale-105"
        >
          <IoLogoCss3 className="text-5xl" color="rgb(38,78,228)" />
        </a>

        <a
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          className="block overflow-hidden flex flex-col justify-center bg-blue-900 p-10 rounded-2xl border cursor-default hover:bg-blue-800 hover:shadow-md hover:shadow-blue-700 ease-in-out duration-500 transform hover:translate-y-1 hover: scale-105"
        >
          <IoLogoJavascript className="text-5xl" color="rgb(255,255,0)" />
          <p></p>
        </a>

        <a
          href="https://react.dev/"
          className="block overflow-hidden flex justify-center bg-blue-900 p-10 rounded-2xl border cursor-default hover:bg-blue-800 hover:shadow-md hover:shadow-blue-700 ease-in-out duration-500 transform hover:translate-y-1 hover: scale-105"
        >
          <IoLogoReact className="text-5xl" color="rgb(0,255,255)" />
        </a>

        <a
          href="https://tailwindcss.com/"
          className="block overflow-hidden flex justify-center bg-blue-900 p-10 rounded-2xl border cursor-default hover:bg-blue-800 hover:shadow-md hover:shadow-blue-700 ease-in-out duration-500 transform hover:translate-y-1 hover: scale-105"
        >
          <RiTailwindCssFill className="text-5xl" color="rgb(0,255,255)" />
        </a>

        <a
          href="https://www.mongodb.com/"
          className="block overflow-hidden flex justify-center bg-blue-900 p-10 rounded-2xl border cursor-default hover:bg-blue-800 hover:shadow-md hover:shadow-blue-700 ease-in-out duration-500 transform hover:translate-y-1 hover: scale-105"
        >
          <BiLogoMongodb className="text-5xl" color="rgb(18,215,113)" />
        </a>

        <a
          href="https://www.python.org/"
          className="block overflow-hidden flex justify-center bg-blue-900 p-10 rounded-2xl border cursor-default hover:bg-blue-800 hover:shadow-md hover:shadow-blue-700 ease-in-out duration-500 transform hover:translate-y-1 hover: scale-105"
        >
          <IoLogoPython className="text-5xl" />
        </a>

        <a
          href="https://en.wikipedia.org/wiki/C_(programming_language)"
          className="block overflow-hidden flex justify-center bg-blue-900 p-10 rounded-2xl border cursor-default hover:bg-blue-800 hover:shadow-md hover:shadow-blue-700 ease-in-out duration-500 transform hover:translate-y-1 hover: scale-105"
        >
          <p className="text-5xl" color="rgb(163,180,198)">C</p>
        </a>
      </div>
    </div>
  );
};

export default SkillShow;
