import React from 'react';
import { Link } from 'react-router-dom';
import './main'

function Hero() {
  return (
    <div id="hero" className="hero-section hide-in-preloading" data-paneffect="true">
      <div className="hero-img">
        <div className="layer">
          <img src="https://via.placeholder.com/600x800" alt="User Name" />
        </div>
        <div className="layer">
          <img src="https://via.placeholder.com/600x800" alt="User Name" />
        </div>
      </div>

      <div className="hero-text">
        <h2>
          We Design & Build
          <br />
          Creative Products
        </h2>
        <Link to="#contact" className="btn">
          Get In Touch
        </Link>
      </div>

      <div className="social">
        <ul>
          <li>
            <Link to="https://github.com/Nthenge" target="_blank" rel="noreferrer">
              <i className="fa fa-github" aria-hidden="true"></i>
            </Link>
          </li>
          <li>
            <Link to="https://twitter.com/Abraham47c?t=VLibWXokv2bDeKPzB-VUvA&s=09" target="_blank" rel="noreferrer">
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </Link>
          </li>
          <li>
            <Link to="https://www.linkedin.com/in/47made" target="_blank" rel="noreferrer">
              <i className="fa fa-linkedin" aria-hidden="true"></i>
            </Link>
          </li>
        </ul>
      </div>

      <div className="scroll-down">
        <Link to="#about" title="Scroll Down">
          Scroll
        </Link>
      </div>
    </div>
  );
}

export default Hero;
