import React from 'react';
import ReactDom from 'react-dom';
import styles from "./LandingPage.module.css";

//chidren just for random code: 123456789 for now
export default function Modal({ open, children, onClose}){
    if (!open) return null
    // var myArray = useRef();
     const myArray = [
        "BX4TR75YZ9"
      ];
    const randomItem = myArray[Math.floor(Math.random()*myArray.length)];
 
    return ReactDom.createPortal(
        <>
        <div id={styles.modal}>
            <button onClick={onClose}>x</button>
            {children}
            <div>CODE: </div>
            <div>{randomItem}</div>
        </div>
        </>,
        document.getElementById('portal')
    )
}