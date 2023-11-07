import React, { Component } from "react";
import {isHeaderBig,isNavMenuOpen,navLinks,isHeaderHidden} from '../Assets/main.js';
import '../Assets/plugins.min.js'
import { BrowserRouter as Link } from 'react-router-dom';

class HiddenHeader extends Component {
  render() {
    return (
      <header
        className={`hide-in-preloading ${
          isHeaderBig ? "big-header" : "small-header"
        } ${isHeaderHidden ? "header-hidden" : ""}`}
      >
        <div className="container">
          <div className="logo" title="SJ Justifield">
            <h1>
              <Link to="index.html">Abraham</Link>
            </h1>
          </div>
          {/* <!-- nav links --> */}
          <nav className={isNavMenuOpen ? "menu-open" : ""} ref="headerNav">
            {/* <!-- nav menu links --> */}
            <ul className="nav-links">
              {navLinks.map((link) => (
                <li key={link.url}>
                  <Link to={link.url} onClick={this.closeNavMenu}>
                    {link.title.en}
                  </Link>
                </li>
              ))}
            </ul>
            {/* menu content in big devices (hidden in mobile/tablet) */}
            <div className="desktop-menu-content" tabIndex="-1">
              <div className="container">
                {/* <!-- about us --> */}
                <div className="about-us">
                  <p>
                    I love making things simple, intuitive, and expertly crafted!
                  </p>
                  <h4 className="block-title">
                    Product is the vital essence of what I do; truly great product
                    is born of meticulous planning and process. This is where I
                    specialize!
                  </h4>
                </div>
                {/* <!-- contact info --> */}
                <ul className="contact-info row">
                  <li className="col-lg-4">
                    <h4 className="block-title">Email</h4>
                    <ul>
                      <li>
                        <Link to="mailto:abrahamnetsec@gmail.com">
                          abrahamnetsec@gmail.com
                        </Link>
                      </li>
                      <li>
                        <Link to="mailto:nthenge65@gmail.com">nthenge65@gmail.com</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="col-lg-4">
                    <h4 className="block-title">Address</h4>
                    <ul>
                      <li>
                        254 Raila Road, Allsops,
                        <br />
                        Naivas, Ruaraka
                      </li>
                    </ul>
                  </li>
                  <li className="col-lg-4">
                    <h4 className="block-title">Phone</h4>
                    <ul>
                      <li>
                        <Link to="tel:02966202290">(+254) 713331448</Link>
                      </li>
                      <li>
                        <Link to="tel:02966202291">(+254) 768830097</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          {/* <!-- options icons --> */}
          <ul className="options-icons">
            {/* <!-- lang switcher button --> */}
            <li className="lang-switcher">
              <ul className="lang-switcher-menu">
                <li className="menu-item menu-item-has-children">
                  <Link to="#">En</Link>
                  <ul className="sub-menu">
                    <li className="menu-item">
                      <Link to="index.html">En</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            {/* <!-- theme switcher button --> */}
            <li className="theme-switcher">
              <button
                className={this.savedTheme}
                title="Change Mode"
                onClick={this.changeAppTheme}
              ></button>
            </li>
            {/* <!-- hamburger button --> */}
            <li
              className={`hamburger-btn ${isNavMenuOpen ? "open" : ""}`}
              onClick={this.toggleNavMenu}
              title="Toggle Side Menu"
              aria-label="Toggle Side Menu"
              ref={this.navMenuToggleBtn}
            >
              <span></span>
              <span></span>
              <span></span>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

export default HiddenHeader;
