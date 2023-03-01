import React from "react";
import "./Course.css";

export default function Course() {
  return (
    <>
      <section className="course">
        <h1>Courses We Offer</h1>
        <p>Nios Admission 2023</p>

        <div className="row">
          <div className="course-col">
            <i class="fa-solid fa-book-open"></i>
            <h3>Secondary ( 10th ) </h3>
            <p>
              Are you looking forward to taking admission in Class 10th and
              confused regarding the procedure that needs to be followed to get
              admission to the National Institute of Open Schooling (NIOS)?
            </p>
            <button className="coruse-btn">Learn More</button>
          </div>
          <div className="course-col">
            <i class="fa-solid fa-book-open-reader"></i>
            <h3>InterMediate ( 12th ) </h3>
            <p>
              Nios 12th admission Nios eligibility criteria documents
              requirements, nios fees, nios exam date, nios result. open school
              nios admission 12th class nios admission in Delhi.
            </p>
            <button className="coruse-btn">Learn More</button>
          </div>
          <div className="course-col">
            <i class="fa-solid fa-user-graduate"></i>
            <h3>Gradution</h3>
            <p>
              Nios Degree admission Nios eligibility criteria documents
              requirements, nios fees, nios exam date, nios result. open school
              nios admission 12th class nios admission in Delhi.
            </p>
            <button className="coruse-btn">Learn More</button>
          </div>
        </div>
      </section>
    </>
  );
}
