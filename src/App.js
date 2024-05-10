import './App.css';
import Header from './MyComponents/Header';
import Banner from './MyComponents/Banner';
import About from './MyComponents/About';
import Skills from './MyComponents/Skills';
import Education from './MyComponents/Education';
import Experience from './MyComponents/Experience';
import Recommendations from './MyComponents/Recommendations';
import Projects from './MyComponents/Projects';
import Footer from './MyComponents/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Github from './MyComponents/Github';


function App() {
  return (
    <div style={{ backgroundColor: "black" }}>
      <section className="container-fluid back " id="Home" style={{ backgroundImage: "url(back.jpg)" }}>
        <Header/>
        <Banner/>
      </section>
      <section className="container-fluid back" id="About" style={{ backgroundColor: "black" }}>
        <About/>
      </section>
      <section className="container-fluid back" id="Activity" style={{ backgroundColor: "black" }}>
        <Github/>
      </section>
      <section className="container-fluid back" id="Skills" style={{ backgroundColor: "black" }}>
        <Skills/>
      </section>
      <section className="container-fluid back" id="Education" style={{ backgroundColor: "black" }}>
        <Education/>
      </section>
      <section className="container-fluid back" id="Experience" style={{ backgroundColor: "black" }}>
        <Experience/>
      </section>
      <section className="container-fluid back" id="Recommendations" style={{ backgroundColor: "black" }}>
        <Recommendations/>
      </section>
      <section className="container-fluid back" id="Projects" style={{ backgroundColor: "black" }}>
        <Projects/>
      </section>
      <section className="container-fluid back" id="Footer">
        <Footer/>
      </section>
    </div>
  );
}

export default App;