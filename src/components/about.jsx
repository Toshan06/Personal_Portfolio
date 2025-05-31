import React, { useEffect, useState } from "react";
import PulsingDot from "./PulsingDot";

function About() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setVisible((previous) => !previous);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gray-900 font-outfit">
      <div className="flex flex-row gap-8 py-12 h-full justify-around items-center px-10">
        <div className="flex flex-col gap-3 items-center place-self-center">
          <h3 className="text-center text-2xl text-green-500">
            user@cybermachine:~$ whoami
          </h3>
          <h4 className="text-left flex text-sm text-gray-400 max-w-2xl md:text-xl">
            I am Toshan Mandal, a passionate Web developer and ML enthusiast who
            loves turning ideas into interactive and visually appealing web
            experiences. have a continous drive to learn, and with my knowledge.
            I would love to contribute in the evergrowing Technology to build
            user-friendly and performance optimized solutions.
          </h4>
        </div>
        <div className="img-container place-self-center">
          <div className="img flex justify-center">
            <img
              className="img max-w-xs md:max-w-md rounded-xl h-[7rem] md:rounded-2xl border-2 md:h-[30rem] "
              src="https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJlYWN0fGVufDB8fDB8fHww"
              alt="ImgStack1"
            />
          </div>
        </div>
      </div>

      <div className="max-w-sm mx-auto md:max-w-3xl lg:max-w-4xl bg-gray-900 border rounded-3xl py-12 hover:bg-gray-700 hover:shadow-md hover:shadow-blue-700 ease-in-out duration-500 transform hover:translate-y-1 hover:scale-105">
        <div className="pb-8 flex justify-center items-center text-3xl bg-clip-text text-transparent bg-gradient-to-r from-purple-700 via-blue-500 to-purple-700 font-bold">
          MY EXPERIENCE
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 items-start pl-5 gap-3">
          <div className="flex flex-row items-center justify-start gap-4">
            <PulsingDot />
            <div className="text-white">Passionate about Web Development</div>
          </div>
          <div className="flex flex-row items-center justify-start gap-4">
            <PulsingDot />
            <div className="text-white">
              Familiar with Tailwind CSS and modern frameworks
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-4">
            <PulsingDot />
            <div className="text-white">
              1+ years of experience building responsive websites
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-4">
            <PulsingDot />
            <div className="text-white">
              Actively seeking full-time developer opportunities
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-4">
            <PulsingDot />
            <div className="text-white">
              Beginner in UI/UX designing using tools like Figma
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-4">
            <PulsingDot />
            <div className="text-white">
              Continuous learner, always exploring new technologies
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
