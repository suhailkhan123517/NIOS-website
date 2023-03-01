import React from "react";
import "./Campus.css";
import campus1 from "../../images/ser1.jpeg";
import campus2 from "../../images/ser2.jpeg";
import campus3 from "../../images/ser3.jpeg";

export default function Campus() {
  return (
    <>
      <section className="campus">
        <h1>Our Global Services</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

        <div className="row">
          <div className="campus-col">
            <img src={campus1} alt="" />
            <div className="layer">
              <h3>LONDON</h3>
            </div>
          </div>
          <div className="campus-col">
            <img src={campus2} alt="" />
            <div className="layer">
              <h3>NEW YORK</h3>
            </div>
          </div>
          <div className="campus-col">
            <img src={campus3} alt="" />
            <div className="layer">
              <h3>WASHINGTON</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
