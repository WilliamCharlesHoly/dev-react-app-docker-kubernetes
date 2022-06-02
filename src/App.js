import Navbar from "./components/Navbar/Navbar";
import './App.css'
import Intro from "./components/Intro/Intro";
import FloatinDiv from "./components/FloatingDiv/FloatingDiv";
import FloatingDiv from "./components/FloatingDiv/FloatingDiv";

function App() {
    return (
    <div className="App">
     <Navbar/>
     <Intro/>
     <FloatingDiv/>
    </div>
  );
}

export default App;
