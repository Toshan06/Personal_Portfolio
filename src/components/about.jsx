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
      <div className="flex flex-row p-12 h-full">
        <div className="flex flex-col gap-3 items-center justify-center w-full">
          <h3 className="text-center text-2xl text-green-500">
            user@cybermachine:~$ whoami
          </h3>
          <h4 className="text-center text-xl text-gray-400">
            I am Toshan Mandal, a passionate Web developer and ML enthusiast
            <br />
            who loves turning ideas into interactive and visually appealing web
            experiences.
            <br />I have a continous drive to learn, and with my knowledge. I
            would love to contribute
            <br />
            in the evergrowing Technology to build user-friendly and performance
            optimized solutions.
          </h4>
        </div>
        <div className="img-container max-w-[700px] items-center text-center">
          <div className="img">
            <img
              className="img max-w-[90%] border-2 border-gray rounded-2xl aspect-[4.5/5]"
              src="https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJlYWN0fGVufDB8fDB8fHww"
              alt="ImgStack1"
            />
          </div>
        </div>
      </div>

      <div className="place-content-center">
        <div className="max-w-lg md:max-w-3xl lg:max-w-4xl mx-auto bg-gray-900 border rounded-3xl py-12 hover:bg-gray-700 hover:shadow-md hover:shadow-blue-700 ease-in-out duration-500 transform hover:translate-y-1 hover: scale-105">
          <div className="pb-8 flex justify-center items-center text-3xl bg-clip-text text-transparent bg-gradient-to-r from-purple-700 via-blue-500 to-purple-700 font-bold">
            MY EXPERIENCE
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 items-start pl-6 gap-3">
            <div className="flex flex-row items-center justify-start gap-3">
              <PulsingDot />
              <div className="text-white">Passionate about Web Development</div>
            </div>
            <div className="flex flex-row items-center justify-start gap-3">
              <PulsingDot />
              <div className="text-white">
                Familiar with Tailwind CSS and modern frameworks
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-3">
              <PulsingDot />
              <div className="text-white">
                1+ years of experience building responsive websites
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-3">
              <PulsingDot />
              <div className="text-white">
                Actively seeking full-time developer opportunities
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-3">
              <PulsingDot />
              <div className="text-white">
                Beginner in UI/UX designing using tools like Figma
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-3">
              <PulsingDot />
              <div className="text-white">
                Continuous learner, always exploring new technologies
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
