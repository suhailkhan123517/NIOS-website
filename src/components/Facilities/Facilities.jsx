import React from "react";
import "./Facilities.css";
import f1 from "../../images/f-1.jpg";
import f2 from "../../images/f-2.jpg";
import f3 from "../../images/f-3.jpg";

export default function Facilities() {
  return (
    <>
      <section className="facilities">
        <h1>Our Facilities</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur.
        </p>

        <div className="row">
          <div className="facilities-col">
            <img src={f2} alt="" />
            <h3>World class Library</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus, impedit.
            </p>
          </div>
          <div className="facilities-col">
            <img src={f3} alt="" />
            <h3>Largest Play Ground</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus, impedit.
            </p>
          </div>
          <div className="facilities-col">
            <img src={f1} alt="" />
            <h3>Testy and Healthy Food</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus, impedit.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
