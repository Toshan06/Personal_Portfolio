import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/scrollToTop";
import Home from './pages/home.jsx'
import Projects from './pages/projects.jsx'
import Resume from './pages/resume.jsx'
import Skills from './pages/skills.jsx'
import Contacts from './pages/contacts.jsx'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/resume" element={<Resume />}></Route>
        <Route path="/skills" element={<Skills />}></Route>
        <Route path="/contacts" element={<Contacts />}></Route>
      </Routes>
    </>
  );
}

export default App;
