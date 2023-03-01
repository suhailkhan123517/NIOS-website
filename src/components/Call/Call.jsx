import React from "react";
import "./Call.css";

export default function Call() {
  return (
    <>
      <section className="cta">
        <h1>
          Enroll For Our Various Online Courses <br /> Anywhere From The World
        </h1>

        <div className="contact-form">
          <div className="row">
            <div className="col">
              <h1>NIOS</h1>
              <h1>NATIONAL</h1>
              <h1>INSTITUTE</h1>
              <h1>OF OPEN</h1>
              <h1>SCHOOLING</h1>
            </div>
            <div className="col">
              <div className="form-col">
                <input type="text" placeholder="Enter your firstName" />
                <input type="text" placeholder="Enter your LastName" />
                <input type="email" placeholder="Enter your Email" />
                <input type="date" placeholder="Enter your Date Of Birth" />
                <input type="number" placeholder="Enter your Mobile Number" />
                <textarea placeholder="Enter your Address" rows="3"></textarea>
                <textarea placeholder="Enter Message" rows="3"></textarea>
                <div className="check-input">
                  <input type="radio" name="select-standard" />
                  <label htmlFor="">10th</label>
                  <input type="radio" name="select-standard" />
                  <label htmlFor="">12th</label>
                  <input type="radio" name="select-standard" />
                  <label htmlFor="">Gradution</label>
                </div>

                <a href="#" className="hero-btn">
                  CONTACT US
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
