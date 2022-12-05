import Nav from './components/Layout/Header/Nav';
import Home from './components/Section/Home/Home';
import About from './components/Section/About/About';
import Skills from './components/Section/Skills/Skills';
import Projects from './components/Section/Projects/Projects';
import Contact from './components/Section/Contact/Contact';
import Footer from './components/Layout/Footer/Footer';
import dataBase from './components/dataBase';

function App() {
  return (
    <>
      <Nav />
      <Home />
      <About />
      <Skills />
      <Projects dataBase={dataBase} />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
