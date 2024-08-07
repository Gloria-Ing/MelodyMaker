
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer.js';
import Home from './pages/Home';
import Service from './pages/Service';
import About from './pages/About';
import Contact from './pages/Contact';
import Audio from './pages/Audio';
import Video from './pages/Video';

import {BrowserRouter as Router,Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/Service" exact element={<Service/>} />
        <Route path="/About" exact element={<About/>} />
        <Route path="/Contact" exact element={<Contact/>} />
        <Route path="/Audio" exact element={<Audio/>} />
        <Route path="/Video" exact element={<Video/>} />
      </Routes>
      <Footer/>

      </Router>
    
     
    </div>
  );
}

export default App;
