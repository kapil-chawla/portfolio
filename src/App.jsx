import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import ReactGA from 'react-ga';
import { useEffect } from "react";


function App() {
  useEffect(() => {
    ReactGA.initialize('G-Z787F9NQYX');
    ReactGA.pageview(window.location.pathname + window.location.search)
    },[]);

  return (
    <>
      <div>
        <Navbar />
        <Home />
        <Experience />
        <Skills />
        <Education />
        <Projects />       
        <Footer />
      </div>
    </>
  );
}

export default App;
