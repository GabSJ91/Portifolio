import Navbar from './componentes/sections/Navbar';
import './App.css';
import Presentation from './componentes/sections/presentation';
import Skills from './componentes/sections/Skills';
import Projects from './componentes/sections/Projects';
import Footer from './componentes/sections/Footer';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Presentation></Presentation>
      <Skills></Skills>
      <Projects></Projects>
      <Footer></Footer>
    </div>
  );
}

export default App;
