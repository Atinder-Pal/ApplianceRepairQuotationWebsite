import React from 'react';
import ReactDom from 'react-dom';
import styles from "./LandingPage.module.css";



// const closeBtn ={
//     margin: '5px'
//     // position: 'center',
//     // top: 0,
//     // left: 0,
//     // right: 0,
//     // button: 0,
//     // backgroundColor: 'rgba(0,0,0,0.7)',
//     // zIndex: 1000
// }


  
  
  // console.log(randomItem);
  // const [randomItem, setIsOpen] = useState();

//chidren just for random code: 123456789 for now
export default function Modal({ open, children, onClose}){
    if (!open) return null
    const myArray = [
        "123456789",
        "abcdefg",
        "frt03049fdf",
        "be4ir75ut9"
      ];
    const randomItem = myArray[Math.floor(Math.random()*myArray.length)];
 

    return ReactDom.createPortal(
        <>
        {/* <div style={OVERLAY_STYLES} /> */}
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