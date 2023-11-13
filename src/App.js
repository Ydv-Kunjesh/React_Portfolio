import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import Banner from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Eduction } from "./components/Eduction";
import { Experience } from "./components/Experience";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Eduction />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
