import { useContext } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ParticlesBackground from "./components/ParticlesBackground";
import ProjectList from "./components/projectList/ProjectList";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context";

const App = () => {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode;
  return (
    <div style={{
      backgroundColor: darkMode ? "#525e64" : "white",
      color: darkMode && "white", 
    }}>
      <Toggle />
      <Intro />
      <ProjectList />
      <Contact />
    </div>
  );
};

export default App; 