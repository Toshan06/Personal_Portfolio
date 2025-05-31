import Navbar from "../components/navbar";
import Footer from "../components/footer";
import HeroImg2 from "../components/heroImg2";
import Pdf from "../components/pdf";

function Resume() {
  return (
    <div>
      <Navbar />
      <HeroImg2 
        heading="RESUME"
        text="Highlighting my journey in tech: from code to creation."
      />
      <Pdf />
      <Footer />
    </div>
  );
}

export default Resume;
