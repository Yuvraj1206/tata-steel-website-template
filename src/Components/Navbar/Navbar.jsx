import React, { useEffect, useState } from "react";
import logo from "../../assets/tata-steel-logo.png";
import tata_logo from "../../assets/tata_logo.png";
import "./Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  const [style, setStyle] = useState("none"); //for sidebar display
  const openSidebar = () => {
    setStyle("sidebar");
  };
  const closeSidebar = () => {
    setStyle("none");
  };
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <>
      <nav className={`${sticky ? "color-bg" : ""}`}>
        <a href="#">
          <img src={logo} alt="tata-steel-logo" />
        </a>
        <ul className="hideOnMobile">
          <li>
            <Link to="hero" smooth={true} offset={0} duration={300}>
              HOME
            </Link>
          </li>
          <li>
            <Link to="slideShow" smooth={true} offset={-150} duration={300}>
              CORPORATE
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} offset={-250} duration={300}>
              ABOUT
            </Link>
          </li>
          <li>
            <Link to="gallery" smooth={true} offset={-150} duration={300}>
              TESTIMONIALS
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} offset={-250} duration={500}>
              CONTACT US
            </Link>
          </li>
        </ul>
        <img src={tata_logo} alt="tata-logo" />
        <a onClick={openSidebar} className="menu-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e8eaed"
          >
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
          </svg>
        </a>
      </nav>

      <nav className={style}>
        <a onClick={closeSidebar}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e8eaed"
          >
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
          </svg>
        </a>
        <a href="#">
          <img src={logo} alt="tata-steel-logo" />
        </a>
        <ul>
          <li>
            <Link
              to="hero"
              smooth={true}
              offset={0}
              duration={300}
              onClick={closeSidebar}
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              to="slideShow"
              smooth={true}
              offset={-150}
              duration={300}
              onClick={closeSidebar}
            >
              CORPORATE
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              offset={-250}
              duration={300}
              onClick={closeSidebar}
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              to="gallery"
              smooth={true}
              offset={-150}
              duration={300}
              onClick={closeSidebar}
            >
              TESTIMONIALS
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              offset={-250}
              duration={500}
              onClick={closeSidebar}
            >
              CONTACT US
            </Link>
          </li>
        </ul>
        <img src={tata_logo} alt="tata-logo" />
      </nav>
    </>
  );
};

export default Navbar;
