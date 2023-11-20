import React from 'react';
import './App.css';
import {isAnyFocus, savedTheme, appRef} from './main.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './Header';
// import Preloader from './Preloader';
// import Footer from './Footer';
// import Hero from './Hero';
// import Statistics from './Statistics';
// import About from './About';
// import Skills from './Skills';
// import Experience from './Experiece';
// import Portfolio from './Portfolio';
// import Testimonials from './Testimonials'
// import Contact from './Contact'

function App() {
  return (
    <Router>
      <div id="app" className="app">
        <div id="app-inner" className={`app-inner ${savedTheme} ${isAnyFocus ? 'enable-focus-style' : ''}`} ref={appRef} onClick={() => isAnyFocus = false} onKeyUp={(event) => { if (event.key === 'Tab') { isAnyFocus = true; }}}>
          <div className="circle-cursor circle-cursor-outer" ref="circleCursorOuter"></div>
          <div className="circle-cursor circle-cursor-inner" ref="circleCursorInner"></div>

          {/* <Preloader/> */}
          <Header />
          {/* <Routes>
            <Route exact path='/'> element = {<Hero />} </Route>
            <Route path='/Footer' element = {<Footer />}> </Route>
            <Route path='/Statistics' element = {<Statistics />}> </Route>
            <Route path='/About' element = {<About />}> </Route>
            <Route path='/Skills' element = {<Skills />}> </Route>
            <Route path='/Experience' element = {<Experience />}> </Route>
            <Route path='Portfolio' element = {<Portfolio />}> </Route>
            <Route path='/Testimonials' element = {<Testimonials />}> </Route>
            <Route path='/Contact' element = {<Contact />}></Route>
          </Routes> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
