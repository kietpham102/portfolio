import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import { navLinks } from "../constants";

const NavBar = () => {
  // track if the user has scrolled down the page
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    // create an event listener for when the user scrolls
    const handleScroll = () => {
      // check if the user has scrolled down at least 10px
      // if so, set the state to true
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    // add the event listener to the window
    window.addEventListener("scroll", handleScroll);

    // cleanup the event listener when the component is unmounted
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        {isHomePage ? (
          <a href="#hero" className="logo">
            Kiet Pham
          </a>
        ) : (
          <Link to="/" className="logo">
            Kiet Pham
          </Link>
        )}

        <nav className="desktop">
          <ul>
            {isHomePage ? (
              navLinks.map(({ link, name }) => (
                <li key={name} className="group">
                  <a href={link}>
                    <span>{name}</span>
                    <span className="underline" />
                  </a>
                </li>
              ))
            ) : (
              <li className="group">
                <Link to="/">
                  <span>Home</span>
                  <span className="underline" />
                </Link>
              </li>
            )}
          </ul>
        </nav>

        {isHomePage ? (
          <a href="#contact" className="contact-btn group">
            <div className="inner">
              <span>Contact me</span>
            </div>
          </a>
        ) : (
          <Link to="/" className="contact-btn group">
            <div className="inner">
              <span>Back to Home</span>
            </div>
          </Link>
        )}
      </div>
    </header>
  );
}

export default NavBar;
