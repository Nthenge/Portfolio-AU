import React from "react";
import '../index.css'
import { BrowserRouter as Link } from 'react-router-dom';
// import '../Assets/plugins.min.js'
import { copyrightDate } from '../Assets/main'

function Footer(){
return(
    <footer>
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                {/* <!-- logo --> */}
                <div className="logo" title="SJ">
                  <h1><Link to="index.html">Abraham</Link></h1>
                </div>
              </div>s
              <div className="col-lg-6">
                &copy; {{ copyrightDate }} Proudly Powered by
                <a href="https://themeforest.net/user/webrouk/portfolio"><b>SJ</b></a>
              </div>
            </div>
          </div>
        </footer>
)
}

export default Footer;