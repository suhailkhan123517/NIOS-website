import React from "react";
import "./Testimonial.css";
import t1 from "../../images/slider1.png";
import t2 from "../../images/slider2.png";
import t3 from "../../images/slider3.png";

export default function Testimonial() {
  return (
    <>
      <section className="testimonial">
        <h1>What Our Student Says</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>

        <div className="row">
          <div className="testmonial-col">
            <img src={t2} alt="" />
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                distinctio labore saepe temporibus
              </p>
              <h3>Kaseem</h3>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-regular fa-star-half-stroke"></i>
            </div>
          </div>
          <div className="testmonial-col">
            <img src={t1} alt="" />
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                distinctio labore saepe temporibus
              </p>
              <h3>Priyanka</h3>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-regular fa-star-half-stroke"></i>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
