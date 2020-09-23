import React from "react";
import styles from "./ContactUs.module.css";
import cx from "classnames";
import Form from "./Form";

const ContactUs = () => {
  return (
    <>
    
      <p className={cx("flow-text", styles["test"])}>Contact Us Page</p>
      <Form/>
    </>
  );
};

export default ContactUs;
