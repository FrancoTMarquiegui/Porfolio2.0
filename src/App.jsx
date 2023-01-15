import './App.css'
import Header from './components/header/Header';
import Home from './components/header/home/Home';
import About from './components/header/about/About';
import Skills from './components/header/skills/Skills';
import Services from './components/header/services/Services';
import Qualification from './components/header/qualificacion/Qualification';
import Footer from './components/header/footer/Footer';

function App() {


  return (
   <>
   <Header />

   <main className='main'>
    <Home />
    <About />
    <Skills />
    <Services />
    <Qualification />
    <Footer />
   </main>
   </>
  )
}

export default App
