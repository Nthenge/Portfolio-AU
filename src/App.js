import React from 'react';
import './App.css';
import {isAnyFocus, savedTheme, appRef} from './main.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Preloader from './Preloader';
import Footer from './Footer';
import Header from './Header';
import Hero from './Hero';
import Statistics from './Statistics';
import About from './About';

function App() {
  return (
    <Router>
      <div id="app" className="app">
        <div id="app-inner" className={`app-inner ${savedTheme} ${isAnyFocus ? 'enable-focus-style' : ''}`} ref={appRef} onClick={() => isAnyFocus = false} onKeyUp={(event) => { if (event.key === 'Tab') { isAnyFocus = true; }}}>
          <div className="circle-cursor circle-cursor-outer" ref="circleCursorOuter"></div>
          <div className="circle-cursor circle-cursor-inner" ref="circleCursorInner"></div>

          <Preloader/>
          <Header />
          <Routes>
            <Route exact path='/'> element = {<Footer />} </Route>
            <Route path='/Hero' element = {<Hero />}> </Route>
            <Route path='/Statistics' element = {<Statistics />}> </Route>
            <Route path='/About' element = {<About />}> </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
