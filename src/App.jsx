import styles from "./App.module.css";
import { Navbar } from "./components/NavBar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Projects } from "./components/Projects/Project";

function App() {
 
  return (
    <>
    <div className={styles.App}>
    <Navbar />
    <Hero />
    <About />
    <Experience />
    <Projects />
    <Contact />
    </div>
   </>
  );
}

export default App;
