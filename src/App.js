import Navbar from './Navbar';
import About from './About';
import Projects from './Projects';
import Gallery from './Gallery';
import Contact from './Contact';
import Skills from './Skills';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <About />
        <Skills />
        <Projects />
        <Gallery />
      </div>
      <Contact />
    </div>
  );
}

export default App;
