import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ParticlesBackground from "./components/ParticlesBackground";
import ProjectList from "./components/projectList/ProjectList";


const App = () => {
  return (
    <div>
      <Intro/>
      <ProjectList/>
      <Contact/>
    </div>
  );
};

export default App; 