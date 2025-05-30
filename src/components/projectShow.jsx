import React from "react";
import "../css/projectShow.css";
import ProjectsCardData from "./ProjectsCardData";
import ProjectsCard from "./projectsCard";

const ProjectShow = () => {
  return (
    <div className="work-container bg-gray-900">
      <div className=" flex flex-col justify-center items-center p-16">
        <p className="text-5xl bg-clip-text text-transparent bg-gradient-to-r from-purple-700 via-blue-500 to-purple-700 font-bold">MY PROJECTS</p>
        <div className="project-container">
          {ProjectsCardData.map((val, index) => {
            return (
              <ProjectsCard
                key={index}
                imgsrc={val.imgsrc}
                title={val.title}
                text={val.text}
                view={val.view}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectShow;
