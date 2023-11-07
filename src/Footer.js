import React from "react";
import './App.css';
import copyrightDate from './main'
import { Link } from 'react-router-dom'

function Footer(){
    return(
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                {/* <!-- logo --> */}
                <div className="logo" title="SJ">
                  <h1><Link to="/Footer">Abraham</Link></h1>
                </div>
              </div>
              <div className="col-lg-6">
            &copy;  {{ copyrightDate }}  Proudly Powered by
                <a href="https://cheerful-cajeta-152ffa.netlify.app/"><b>SJ</b></a>
              </div>
            </div>
          </div>
        </footer>
    )
}
export default Footer;