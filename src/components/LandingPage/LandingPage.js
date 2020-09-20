import React from "react";
import styles from "../LandingPage/LandingPage.module.css";

const LandingPage = () => {
  return (
  <section className="timer-container">
    <section className="timer">
      <div>
        <span className="mdi mdi-calendar-clock timer-icon"></span>
        <h2>CountDown Timer</h2>
        <p>Coupon expire date</p>
      </div>
      <div>
        <section>
            <p>00</p>
            <p><small>Days</small></p>
        </section>
        <span>:</span>
        <section>
            <p>00</p>
            <p><small>Hours</small></p>
        </section>
        <span>:</span>
        <section>
            <p>00</p>
            <p><small>Min</small></p>
        </section>
        <span>:</span>
        <section>
            <p>00</p>
            <p><small>Sec</small></p>
        </section>
      </div>
    </section>
    <section>
      <button id="btn"> Get Promotion Code </button>
    </section>
  </section>
  );
};

export default LandingPage;
