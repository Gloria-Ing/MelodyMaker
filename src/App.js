
import './App.css';
import Navbar from './components/Navbars';
import Footer from './components/Footers.js';
import Home from './pages/Homes';
import About from './pages/Abouts';
import Contact from './pages/Contacts';
import Audio from './pages/Audio';
import Video from './pages/Video';
import Gallery from './pages/Gallery';

import {BrowserRouter as Router,Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/About" exact element={<About/>} />
        <Route path="/Contact" exact element={<Contact/>} />
        <Route path="/Audio" exact element={<Audio/>} />
        <Route path="/Video" exact element={<Video/>} />
        <Route path="/Gallery" exact element={<Gallery/>} />

      </Routes>
      <Footer/>

      </Router>
    
     
    </div>
  );
}

export default App;
