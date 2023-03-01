import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <section className="footer">
        <div className="row">
          <div className="col">
            <h1>NATIONAL</h1>
            <h1>INSTITUTE</h1>
            <h1>OF OPEN</h1>
            <h1>SCHOOLING</h1>
          </div>
          <div className="col">
            <h1>Quicks Link</h1>
            <div className="links">
              <ul>
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
            </div>
          </div>
          <div className="col">
            <div className="icon">
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-linkedin"></i>
            </div>
            <p>
              Made with{" "}
              <a
                href="https://www.youtube.com/channel/UC2FYgQq8EygZHvrJx7GCqBA"
                target="_blank"
              >
                <i class="fa-brands fa-youtube"></i>
              </a>{" "}
              by M.S. Coding{" "}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
