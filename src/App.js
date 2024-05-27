import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Title from './components/Title';
//import Recommandation from './components/Recommandation';
import Technology from './components/Technology';
import Education from './components/Education';
import Project from './components/Project';
import Aboutme from './components/Aboutme';
//import Blogs from './components/Blogs';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Writearecommandation from './components/Writearecommandation';
import Scroll from './components/Scroll';
import Allprojects from './components/Allprojects';
import Talk from './components/Talk';
import Test from './components/Test';
//import Error from './components/Error';
import Player from './components/Player';
import Eventpage from './components/Eventpage';
import Chatbotpage from './components/Chatbotpage';

//import Allblog from './components/Allblog';

function App() {
    return (
      <BrowserRouter>
        <Scroll />
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={
            <>
              <Title />
              {/* <Recommandation /> */}
              <Aboutme />
              <Education />
              <Technology />
              <Project />
              {/* <Blogs /> */}
            </>
          } />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/writearecommandation" element={<Writearecommandation />} />
          <Route path="/allprojects" element={<Allprojects />} />
          {/* <Route path="/allblog" element={<Allblog />} /> */}
          <Route path="/talk" element={<Talk />} />
          <Route path="/test" element={<Test />} />
          {/*<Route path="*" element={<Error />} />*/}
          <Route path="/player" element={<Player />} />
          <Route path="/eventpage" element={<Eventpage />} />
          <Route path="/chatbotpage" element={<Chatbotpage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    );  
}

export default App;
