import React from "react";
import styles from "./ContactUs.module.css";
import cx from "classnames";
import Form from "./Form";
import Slide from './Slide';
// olegs imports
import Map from './Map';
import './Map.module.css';
//olegs imports


const ContactUs = () => {
  return (
    <>
      
      <Slide />
      <Form/>
      {/* olegs map */}
      <Map />
    </>
  );
};

export default ContactUs;
