import React from 'react';
import { isHeaderBig, isHeaderHidden, isNavMenuOpen, navLinks, savedTheme, closeNavMenu, changeAppTheme, toggleNavMenu, navMenuToggleBtn, headerNav} from './main'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header
      className={`hide-in-preloading ${isHeaderBig ? 'big-header' : 'small-header'} ${
        isHeaderHidden ? 'header-hidden' : ''
      }`}
    >
      <div className="container">
        {/* logo */}
        <div className="logo" title="SJ">
          <h1>
            <a href="index.html">Abraham</a>
          </h1>
        </div>

        {/* nav links */}
        <nav className={isNavMenuOpen ? 'menu-open' : ''} ref={headerNav}>
          {/* nav menu links */}
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.url}>
                <a href={link.url} onClick={closeNavMenu}>
                  {link.title.en}
                </a>
              </li>
            ))}
          </ul>

          {/* menu content in big devices (hidden in mobile/tablet) */}
          <div className="desktop-menu-content" tabIndex="-1">
            <div className="container">
              {/* about us */}
              <div className="about-us">
                <p>I love making things simple, intuitive, and expertly crafted!</p>
                <h4 className="block-title">
                  Product is the vital essence of what I do, truly great product is born of meticulous planning and process. This is where I specialize!
                </h4>
              </div>

              {/* contact info */}
              <ul className="contact-info row">
                <li className="col-lg-4">
                  <h4 className="block-title">Email</h4>
                  <ul>
                    <li>
                      <a href="mailto:abrahamnetsec@gmail.com">abrahamnetsec@gmail.com</a>
                    </li>
                    <li>
                      <a href="mailto:nthenge65@gmail.com">nthenge65@gmail.com</a>
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
                      <a href="tel:02966202290">(+254) 713331448</a>
                    </li>
                    <li>
                      <a href="tel:02966202291">(+254) 768830097</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* options icons */}
        <ul className="options-icons">
          {/* lang switcher button */}
          <li className="lang-switcher">
            <ul className="lang-switcher-menu">
              <li className="menu-item menu-item-has-children">
                <Link to="/">En</Link>
                <ul className="sub-menu">
                  <li className="menu-item">
                    <Link to="/App">En</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          {/* theme switcher button */}
          <li className="theme-switcher">
            <button className={savedTheme} title="Change Mode" onClick={changeAppTheme}></button>
          </li>

          {/* hamburger button */}
          <li className={`hamburger-btn ${isNavMenuOpen ? 'open' : ''}`}>
            <button
              onClick={toggleNavMenu}
              title="Toggle Side Menu"
              aria-label="Toggle Side Menu"
              ref={navMenuToggleBtn}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
