import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../../images/s1.jpeg";
import img2 from "../../images/s2.jpeg";
import img3 from "../../images/s3.jpeg";
import img4 from "../../images/s4.jpeg";

import "./Home.css";

export default function Home() {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={1000}>
          <div className="bg-dark">
            <img className="d-block w-100" src={img1} alt="First slide" />
          </div>
          <Carousel.Caption>
            {/* <div className="c-text">
              <h1>World's Biggest University</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              <button>Visit Us To Know More</button>
            </div> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <div className="bg-dark">
            <img className="d-block w-100" src={img2} alt="First slide" />
          </div>
          <Carousel.Caption>
            {/* <div className="c-text">
              <h1>World's Biggest University</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              <button>Visit Us To Know More</button>
            </div> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="bg-dark">
            <img className="d-block w-100" src={img3} alt="First slide" />
          </div>
          <Carousel.Caption>
            {/* <div className="c-text">
              <h1>World's Biggest University</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              <button>Visit Us To Know More</button>
            </div> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="bg-dark">
            <img className="d-block w-100" src={img4} alt="First slide" />
          </div>
          <Carousel.Caption>
            {/* <div className="c-text">
              <h1>World's Biggest University</h1>
              <p>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet.</p>
              <button>Visit Us To Know More</button>
            </div> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}
