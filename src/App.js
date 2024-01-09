import Navbar from './Navbar';
import About from './About';
import Projects from './Projects';
import Gallery from './Gallery';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <About />
        <Projects />
        <Gallery />
      </div>
      <Contact />
    </div>
  );
}

export default App;
