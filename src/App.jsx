import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Qualifications from "./components/qualification";
import './App.css'
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <section id="banner">
          <Banner />
        </section>
        <section id="qualifications">
          <Qualifications />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <section id="footer">
          <Footer />
        </section>
      </main>
    </div>
  );
}

export default App;
