import React from 'react';
import {experienceYears} from './main';
import { Link } from 'react-router-dom';

function Statistics() {
  return (
    <div id="statistics" className="statistics-section section">
      <div className="section-content">
        <div className="container">
          <ul className="statistics-items row">
            <li className="col-sm-12 col-md-6 col-lg-4">
              <Link to="#experience">
                <div className="icon">
                  <img src="assets/images/icons/emblem.png" alt="Years of Experience" />
                </div>
                <div className="text">
                  <h3>{experienceYears}+</h3>
                  <strong>Years of Experience</strong>
                </div>
                <i className="fa fa-angle-right" aria-hidden="true"></i>
              </Link>
            </li>
            <li className="col-sm-12 col-md-6 col-lg-4">
              <Link to="#portfolio">
                <div className="icon">
                  <img src="assets/images/icons/check-mark.png" alt="Completed Projects" />
                </div>
                <div className="text">
                  <h3>30+</h3>
                  <strong>Completed Projects</strong>
                </div>
                <i className="fa fa-angle-right" aria-hidden="true"></i>
              </Link>
            </li>
            <li className="col-sm-12 col-md-6 col-lg-4">
              <Link to="#testimonials">
                <div className="icon">
                  <img src="assets/images/icons/happy.png" alt="Happy Clients" />
                </div>
                <div className="text">
                  <h3>25+</h3>
                  <strong>Happy Clients</strong>
                </div>
                <i className="fa fa-angle-right" aria-hidden="true"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
