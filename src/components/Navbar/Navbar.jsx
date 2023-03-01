import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [fix, setFix] = useState(false);

  const fixed = () => {
    if (window.pageYOffset >= 30) {
      setFix(true);
    } else {
      setFix(false);
    }
  };

  window.addEventListener("scroll", fixed);

  const [isOpen, setIsOpen] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <>
      <header ref={menuRef} className={fix ? "header bg" : "header"}>
        <div className="container">
          <nav>
            <div className="logo">
              <i class="fa-sharp fa-solid fa-graduation-cap"></i>
              <h1>NIOS</h1>
            </div>
            <ul className={`menu ${isOpen && "open"}`}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="course">Course</Link>
              </li>
              <li>
                <Link to="campus">Campus</Link>
              </li>
              <li>
                <Link to="facilities">Facilities</Link>
              </li>
              <li>
                <Link to="testimonial">Testimonial</Link>
              </li>
              <li>
                <Link to="contact">Contact Us</Link>
              </li>
            </ul>
            <div
              onClick={() => setIsOpen(!isOpen)}
              className={`nav-toggle ${isOpen && "open"}`}
            >
              <div className="bar"></div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
