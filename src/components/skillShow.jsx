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
    <div className="max-w-full flex flex-col gap-16 justify-center items-center p-20 bg-gradient-to-b from-gray-900 to-blue-900">
      <h2 className="text-4xl bg-clip-text text-transparent bg-gradient-to-r from-purple-700 via-blue-500 to-purple-700 font-bold">
        MY SKILLS
      </h2>
      <div className="skill-container text-sm md:text-2xl grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-content-center gap-8">
        <a
          href="https://en.wikipedia.org/wiki/HTML"
          className="block overflow-hidden flex flex-col justify-center items-center gap-1 bg-blue-900 p-10 rounded-2xl border cursor-default hover:bg-blue-800 hover:shadow-blue-700 hover:shadow-md ease-in-out duration-500 transform hover:translate-y-1 hover:scale-105"
        >
          <IoLogoHtml5 className="text-5xl" color="rgb(229,77,38)" />
          <p className="text-[rgb(229,77,38)]">HTML</p>
        </a>

        <a
          href="https://en.wikipedia.org/wiki/CSS"
          className="block overflow-hidden flex flex-col justify-center items-center gap-1 bg-blue-900 p-10 rounded-2xl border cursor-default hover:bg-blue-800 hover:shadow-md hover:shadow-blue-700 ease-in-out duration-500 transform hover:translate-y-1 hover: scale-105"
        >
          <IoLogoCss3 className="text-5xl" color="rgb(38,78,228)" />
          <p className="text-[rgb(38,78,228)]">CSS</p>
        </a>

        <a
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          className="block overflow-hidden flex flex-col justify-center items-center gap-1 bg-blue-900 p-10 rounded-2xl border cursor-default hover:bg-blue-800 hover:shadow-md hover:shadow-blue-700 ease-in-out duration-500 transform hover:translate-y-1 hover: scale-105"
        >
          <IoLogoJavascript className="text-5xl" color="rgb(255,255,0)" />
          <p className="text-[rgb(255,255,0)]">JavaScript</p>
          <p></p>
        </a>

        <a
          href="https://react.dev/"
          className="block overflow-hidden flex flex-col justify-center items-center gap-1 bg-blue-900 p-10 rounded-2xl border cursor-default hover:bg-blue-800 hover:shadow-md hover:shadow-blue-700 ease-in-out duration-500 transform hover:translate-y-1 hover: scale-105"
        >
          <IoLogoReact className="text-5xl" color="rgb(0,255,255)" />
          <p className="text-[rgb(0,255,255)]">React</p>
        </a>

        <a
          href="https://tailwindcss.com/"
          className="block overflow-hidden flex flex-col justify-center items-center gap-1 bg-blue-900 p-10 rounded-2xl border cursor-default hover:bg-blue-800 hover:shadow-md hover:shadow-blue-700 ease-in-out duration-500 transform hover:translate-y-1 hover: scale-105"
        >
          <RiTailwindCssFill className="text-5xl" color="rgb(0,255,255)" />
          <p className="text-[rgb(0,255,255)]">Tailwindcss</p>
        </a>

        <a
          href="https://www.mongodb.com/"
          className="block overflow-hidden flex flex-col justify-center items-center gap-1 bg-blue-900 p-10 rounded-2xl border cursor-default hover:bg-blue-800 hover:shadow-md hover:shadow-blue-700 ease-in-out duration-500 transform hover:translate-y-1 hover: scale-105"
        >
          <BiLogoMongodb className="text-5xl" color="rgb(18,215,113)" />
          <p className="text-[rgb(18,215,113)]">MongoDB</p>
        </a>

        <a
          href="https://www.python.org/"
          className="block overflow-hidden flex flex-col justify-center items-center text-white gap-1 bg-blue-900 p-10 rounded-2xl border cursor-default hover:bg-blue-800 hover:shadow-md hover:shadow-blue-700 ease-in-out duration-500 transform hover:translate-y-1 hover: scale-105"
        >
          <IoLogoPython className="text-5xl" />
          <p className="text-[rgb(255,255,0)]">Python</p>
        </a>

        <a
          href="https://en.wikipedia.org/wiki/C_(programming_language)"
          className="block overflow-hidden flex flex-col justify-center items-center gap-1 bg-blue-900 p-10 rounded-2xl border cursor-default hover:bg-blue-800 hover:shadow-md hover:shadow-blue-700 ease-in-out duration-500 transform hover:translate-y-1 hover: scale-105"
        >
          <p className="text-5xl bg-clip-text text-transparent bg-gray-400">
            C
          </p>
          <p className="text-[rgb(163,180,198)]">C</p>
        </a>
      </div>
    </div>
  );
};

export default SkillShow;
