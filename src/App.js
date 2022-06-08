import Navbar from "./components/Navbar";
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Intro from "./components/Intro/Intro";
import Portfolio from "./components/Portfolio/Portfolio";
import Certificate from "./components/Certificate/Certificate";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Service from "./components/Service/Service";
import Technology from "./components/Technology/Technology";

function App() {
  return (


    <div className="App">

      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Intro} />
          <Route path='/service' component={Service} />
          <Route path='/technology' component={Technology} />
          <Route path='/contact' component={Contact} />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/certificate' component={Certificate} />
        </Switch>
      </Router>

     <Service/>
     <Technology/>
     <Portfolio/>
     <Certificate/>
     <Contact/>
     <Footer/>
    </div>

  );
}

export default App;