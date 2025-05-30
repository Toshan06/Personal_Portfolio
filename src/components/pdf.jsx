import html2pdf from "html2pdf.js";

import { BiDownload } from "react-icons/bi";
import Image from "../assets/ResumePaper.png";

const Pdf = () => {
  async function handleOnClick() {
    const element = document.querySelector("#resume");
    html2pdf(element, {
      margin: 20,
    });
  }

  return (
    <div
      id="resume"
      className="bg-gray-900 p-16 text-center flex flex-col gap-6"
    >
      <p className="pb-6 text-3xl bg-clip-text text-transparent bg-gradient-to-r from-purple-700 via-blue-500 to-purple-700 font-bold" data-html2canvas-ignore>
        DOWNLOAD MY RESUME HERE:
      </p>

      <img className="max-w-s md:max-w-md mx-auto" src={Image} alt="Img" />

      <div data-html2canvas-ignore>
        <button onClick={handleOnClick} className="btn hover:bg-green-500 hover:text-white ease-in-out duration-500 hover:transform hover:translate-y-1 hover: scale-105 bg-[rgb(255,255,0)] text-black border-2 px-3 py-2 font-semibold text-lg rounded-xl">
        Resume
        </button>
      </div>
    </div>
  );
};

export default Pdf;
