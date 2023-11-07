import React from 'react';
import {Link} from 'react-router-dom';
import aboutSection from './main'

function About() {
  return (
    <div id="about" className="about-section section" tabIndex="-1" ref={aboutSection}>
      <div className="container">
        <div className="section-content row">
          {/* about image */}
          <div className="about-img col-lg-6">
            <div className="layer">
              <img src="https://via.placeholder.com/330x500" alt="User Name" />
            </div>
            <div className="layer">
              <img src="https://via.placeholder.com/330x500" alt="User Name" />
            </div>
          </div>

          {/* text box */}
          <div className="about-text col-lg-6">
            <div className="text-box-inline">
              <span className="subtitle">about me</span>
              <h2>
                Need a Creative Product?
                <br />
                I can Help You!
              </h2>
              <p>
                Hi! I’m Abraham Mutinda, and I’m a developer who has a passion for building clean web applications with intuitive functionality. I enjoy the process of turning ideas into reality using creative solutions. I’m always curious about learning new skills, tools, and concepts. In addition to working on various solo full-stack projects, I have worked with creative teams, which involves daily stand-ups and communications, source control, and project management.
              </p>
              <div className="btns-container">
                <Link to="#contact" className="btn btn-primary">
                  Hire Me
                </Link>
                <Link download to="#" className="btn btn-outline-light">
                  Download CV
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
