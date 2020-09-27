import React from "react";
import { Slide } from "react-slideshow-image";
import "./Slide.css";
import "react-slideshow-image/dist/styles.css";

//React SlideShow for four slides using slideShow function
const Slideshow = () => {
  return (
    <div className="slide-container">
      <Slide>
        <div className="each-slide">
          <div className="showImg1"></div>
        </div>
        <div className="each-slide">
          <div className="showImg2"></div>
        </div>
        <div className="each-slide">
          <div className="showImg3"></div>
        </div>
        <div className="each-slide">
          <div className="showImg4"></div>
        </div>
      </Slide>
    </div>
  );
};
export default Slideshow;
