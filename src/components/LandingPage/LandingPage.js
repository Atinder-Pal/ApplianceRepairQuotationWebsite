import React, { useEffect, useRef, useState } from "react";
import styles from "./LandingPage.module.css";
import Modal from "./Modal";

const LandingPage = () => {

//==========Timer Logic starts here==========
// set time where to start before load
    const [timeD, setDays] = useState ('00');
    const [timeH, setHours] = useState ('00');
    const [timeM, setMinutes] = useState ('00');
    const [timeS, setSeconds] = useState ('00');
    // useref doesn't cause a component to re-update when it gets changed. Returns object
    var period = useRef ();
    //create function StartTimer that's going to call our timer
    const startTimer = () => {
      //set Date to count from
        const countdownDate = new Date('September 28, 2020 00:00:00').getTime();
        // function that calls new "now" every 1000ms =1sec
        period = setInterval(() => {
                // build-in method that returns a current time
                const now = new Date().getTime();
                // set date minus current give us time remaining
                const distance = countdownDate - now;
                // logic found on w3school see(citation)
                const days = Math.floor(distance / (1000*60*60*24));
                const hours = Math.floor((distance % (1000*60*60*24)/(1000*60*60)));
                const minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
                const seconds = Math.floor((distance % (1000*60)) / 1000);
                //use clearInterval to stop the timer
                if (distance < 0)
                {
                    clearInterval(period);
                }
                //if clock still ticking then assign new values to our hooks
                else {
                    setDays(days);
                    setHours(hours);
                    setMinutes(minutes);
                    setSeconds(seconds);
                }
        }, 1000);
    };
// now call our method startTimer and return clearInterval function 
    useEffect(() => {
      // added let mount=true; for fixing unmounted rendering issue
      let mounted = true;
      // Warning would always comeup during clearing variab and 
      // console would say: "Can't perform a React state update on an unmounted component. 
      // This is a no-op, but it indicates a memory leak in your application. 
      // To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function."
      // to fix this issue 1) go here https://www.debuggr.io/react-update-unmounted-component/
      // and 2) create mounted variable to hold boolean value 3) if statment to render state only if changed
      // 4) return mounted = false after clearing variable period. 5) then make sure you dont have clearInterval(period.current) 
      // because it clears wrong variable . You need to clear period not period.current.
      if(mounted) {
        startTimer()
      }
      return () => {
        // added if(mounted){} for fixing state update on an unmounted component
       if(mounted){
          clearInterval(period);
        } 
        mounted = false;
      };  
  }) 
  
// =====Timer Logic ends here=============

//isOpen for Modal
const [isOpen, setIsOpen] = useState(false)
// =======Returns entire Landing component==========
  return (
  <section className={styles.grid}>  
    {/* ==========Fade in Pictures block============ */}
    <div className={styles.crossFade}>
      <div id={styles.cf}>
        <img className={styles.bottom} alt=""/>
        <img className={styles.top} alt=""/>
      </div>
    </div>
    {/* ===========Timer block========== */}
    <section className={styles.timerContainer}>
      <section className={styles.timer}>
        <div>
          <span className={styles.percentIcon}></span> 
          <h2>Limited Offer 30 <i className="fas fa-percent"> OFF</i> </h2>
          <p>Coupon expire date</p>
        </div>
        <div id={styles.timerElements}>
          <section className={styles.elementsHeight}>
              <p>{timeD}</p>
              <p><small>Days</small></p>
          </section>
          <span>:</span>
          <section>
              <p>{timeH}</p>
              <p><small>Hour</small></p>
          </section>
          <span>:</span>
          <section>
              <p>{timeM}</p>
              <p><small>Min</small></p>
          </section>
          <span>:</span>
          <section>
              <p>{timeS}</p>
              <p><small>Sec</small></p>
          </section>
        </div>
      </section>
    </section>

    {/* =====Button block========= */}
    <div className={styles.container}>
      <section className={styles.center}>
        <button onClick={() => setIsOpen(true)} className={styles.button}> <span className={styles.span}><i className="fas fa-tags"></i> Get Promo Code</span> 
          <svg width="180px" height="60px" viewBox="0 0 180 60" className="border">
            <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
            <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
          </svg> 
        </button>
        {/* Open a Modal from a different component, used portal for that */}
        <Modal id="modal" open={isOpen} onClose={()=> setIsOpen(false)}>
        </Modal>
      </section>
    </div>
   
  </section>
  );
  // ========Return Landing ends==========
};

export default LandingPage;
