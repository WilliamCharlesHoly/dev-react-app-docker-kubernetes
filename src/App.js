import Navbar from "./components/Navbar/Navbar";
import './App.css'
import Intro from "./components/Intro/Intro";
import Portfolio from "./components/Portfolio/Portfolio";
import Certificate from "./components/Certificate/Certificate";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Service from "./components/Service/Service";

function App() {
    return (
    <div className="App">
     <Navbar/>
     <Intro/>
     <Service/>
     <Portfolio/>
     <Certificate/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
