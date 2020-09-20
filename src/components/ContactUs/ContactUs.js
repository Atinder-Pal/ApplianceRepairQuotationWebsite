import React from "react";
import styles from "./ContactUs.module.css";
import cx from "classnames";

const ContactUs = () => {
  return (
    <>
      <p className={cx("flow-text", styles["test"])}>This is Contact Page</p>
    </>
  );
};

export default ContactUs;
