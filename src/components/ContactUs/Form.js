import React from "react";
import useForm from "./useForm";
import validate from "./validateForm";
import "./Form.css";
import emailjs from "emailjs-com";
import apiKeys from "./apikeys";
import { MDBBtn } from "mdbreact";

// create a form by taking components with state management and  display the errors, if any

const Form = () => {
  const handleContactUsSubmit = (values) => {
    // e.preventDefault();
    emailjs.send("gmail", apiKeys.TEMPLATE_ID, values, apiKeys.USER_ID).then(
      (result) => {
        alert("Message Sent, I'll get back to you shortly", result.text);
      },
      (error) => {
        alert("An error occured, Please try again", error.text);
      }
    );
    console.log("Submitted Successfully");
  };

  // calling handleContactUsSubmit in useForm function here, passing submit actually and it will do same exact behavior (the constants declared and can be reused wherever required)
  // customized per function using custom hook
  const { handleChange, handleSubmit, values, errors } = useForm(
    handleContactUsSubmit,
    validate
  );

  return (
    // form component 
    // label // input for name
    //label // input for phone
    //label //input for email
    //label // input for message
    // submit button

    <div className="centered">
      <form onSubmit={handleSubmit} noValidate> 

      {/* no validate for browser not to display validation messages */}
        <h1>Shoot Message</h1>

        <div>
          <label> Name </label>
          <div >
            <input
            //conditional rendering (if and error message)
              className={`${errors.name && "inputError"}`}
              name="name"
              type="text"
              //values are being passed inside of these inputs, functions are being passed onChange and handleSubmit function being passed onto Form
              value={values.name} 
              onChange={handleChange}
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>
        </div>

        <div>
          <label> Phone </label>
          <div>
            <input
              className={`${errors.phone && "inputError"}`}
              name="phone"
              type="number"
              value={values.phone}
              onChange={handleChange}
            />
            {errors.phone && <p className="error">{errors.phone}</p>}
          </div>
        </div>

        <div>
          <label> Email </label>
          <div>
            <input
              className={`${errors.email && "inputError"}`}
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
        </div>

        <div>
          <label> Message </label>
          <div>
            <textarea 
              name="message"  
              type="text"
              value={values.message}
              onChange={handleChange}
              //  rows={20}
              // columns={20}
            />
          </div>
        </div>

        {/* <button type="submit">Submit </button> */}
        <div>
          <MDBBtn gradient="aqua" type="submit">
            {" "}
            Submit
          </MDBBtn>
        </div>
      </form>
    </div>
  );
};

export default Form;
