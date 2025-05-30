import Navbar from "../components/navbar";
import Footer from "../components/footer";
import HeroImg2 from "../components/heroImg2";
import ProjectShow from "../components/projectShow";

function Projects() {
  return (
    <div className="projects">
      <Navbar />
      <HeroImg2 heading="PROJECTS" text="A concise overview of my projects" />
      <ProjectShow />
      <Footer />
    </div>
  );
}

export default Projects;
