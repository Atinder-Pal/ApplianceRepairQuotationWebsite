

import React from 'react';
import useForm from './useForm';
import validate from "./validateForm";

import './Form.css';
import emailjs from 'emailjs-com';
import apiKeys from './apikeys';


const Form = () => {
    const handleContactUsSubmit=(values)=> {
        // e.preventDefault();
        emailjs.send('gmail', apiKeys.TEMPLATE_ID, values, apiKeys.USER_ID)
            .then(result => {
                alert('Message Sent, I\'ll get back to you shortly', result.text);
            },
                error => {
                    alert('An error occured, Please try again', error.text)
                })
         console.log("Submitted Successfully");
    }
    const { handleChange, handleSubmit, values, errors } = useForm(handleContactUsSubmit, validate);



  
    
    
return (
    <div>
        <form onSubmit={handleSubmit} noValidate>
            {<h1>Contact Us</h1>}

            <div>
                <label> Name </label>
                <div>
                    <input
                        className={`errros.name && "inputError"}`}
                        name="name"
                        type="text"
                        value={values.name}
                        onChange={handleChange} />
                    {errors.name && <p className="error">{errors.name}</p>}
                </div>
            </div>

            <div>
                <label> Phone </label>
                <div>
                    <input
                        className={`errros.phone && "inputError"}`}
                        name="phone"
                        type="number"
                        value={values.phone}
                        onChange={handleChange} />
                    {errors.phone && <p className="error">{errors.phone}</p>}
                </div>
            </div>

            <div>
                <label> Email </label>
                <div>
                    <input
                        className={`errros.email && "inputError"}`}
                        name="email"
                        type="email"
                        value={values.email}
                        onChange={handleChange} />
                    {errors.email && <p className="error">{errors.email}</p>}
                </div>
            </div>

            <div>
                <label> Message </label>
                <div>
                    <textarea name="message"
                        type="message"
                        value={values.message}
                        onChange={handleChange} />

                </div>
            </div>

            <button type="submit">Submit</button>

        </form>
    </div>
);
}


export default Form;
