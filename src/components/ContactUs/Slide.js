import React from 'react';
import { Slide } from 'react-slideshow-image';
import './Slide.css';
import 'react-slideshow-image/dist/styles.css';
import img1 from './Images/img1.jpg';
import img2 from './Images/img2.jpg';
import img3 from './Images/img3.jpg';
import img4 from './Images/img4.jpg';

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Slide>
        <div className="each-slide">
          <div style={{ background: `url(${img1})` }}>
            <span>Slide 1</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{ background: `url(${img2})` }}>
            <span>Slide 2</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{ background: `url(${img3})` }}>
            <span>Slide 3</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{ background: `url(${img4})` }}>
            <span>Slide 4</span>
          </div>
        </div>
      </Slide>
    </div>
  );
};
export default Slideshow;