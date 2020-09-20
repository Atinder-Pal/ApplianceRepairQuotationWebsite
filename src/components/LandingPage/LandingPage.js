import React from "react";
import styles from "./LandingPage.module.css";

const LandingPage = () => {
  return (
  <section className={styles.timerContainer}>
    <section className={styles.timer}>
      <div>
        <span className={styles.percentIcon}></span> 
        <h2>CountDown Timer 300 <i class="fas fa-percent"> OFF</i> </h2>
        <p>Coupon expire date</p>
      </div>
      <div id={styles.timerElements}>
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
      <section>
        <button className={styles.btn}> Get Promotion Code <i class="fas fa-tags"></i> </button>
      </section>
    </section>
   
  </section>
  );
};

export default LandingPage;
