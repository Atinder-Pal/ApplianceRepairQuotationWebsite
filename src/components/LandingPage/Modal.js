import React from 'react';
import ReactDom from 'react-dom';
import styles from "./LandingPage.module.css";



// const OVERLAY_STYLES ={
//     position: 'fixed',
//     top: 0,
//     left: 0,
//     right: 0,
//     button: 0,
//     backgroundColor: 'rgba(0,0,0,0.7)',
//     zIndex: 1000
// }

//chidren just UUDI: 123456789 for now
export default function Modal({ open, children, onClose}){
    if (!open) return null
    return ReactDom.createPortal(
        <>
        {/* <div style={OVERLAY_STYLES} /> */}
        <div className={styles.modal}>
            <button onClick={onClose}>x</button>
            {children}
        </div>
        </>,
        document.getElementById('portal')
    )
}