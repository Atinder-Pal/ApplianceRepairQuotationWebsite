import { useState, useEffect } from "react";

// useState hooked from react
// Custom React Hook - useForm takes in callback and we are passing submit function from form.js at handleSubmit , passing in here for this hook to use
// Defining 2 functions handleCange and handleSubmit and  values object returning them in an object from useform
// Destructure and use what is needed

//passing validate function as well, as reusable
const useForm = (callback, validate) => {
  // creating handler function , basically what we enter in form to stay and resetting value from the react state // initalizing default state to set default values, destructuring
  // pulling object as values constant and set values as function and is setter used to update object

  const [values, setValues] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  // errors object and new state for errors
  const [errors, setErrors] = useState({});
  // initial value false
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    // change event , function handleChange,  grabbing target of what we are currently in, name will be pulled
    const { name, value } = e.target;

    // console.log(e.target.name);
    // console.log(e.target.value);
    // setter function through spread operator,grabbing key value pair and spreading into new object, easily update object in state, set value = name and setting it back to/ reset  state
    setValues({
      ...values,
      // [e.target.name]:e.target.value
      [name]: value,
    });
  };

  // handleSubmit function , prevent the default behaviour of browser , call callback which is submit
  const handleSubmit = (e) => {
    e.preventDefault();
    //to generalize we are calling submit as callback
    // whenever we submit, it will set the errors and validate them //handling errors
    setErrors(validate(values));

    ////check to see if there are no errors and isSubmitting true and call callback
    setIsSubmitting(true);
    // submit();
  };

  // only change when errors object is changing/gets updated when submit is hit
  //check to see if there are no errors and isSubmitting true and call callback
  //check to see if errors object is empty, pull keys off into an array
  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback(values);
    } else if (Object.keys(errors).length > 0 && isSubmitting) {
      alert("something wrong");
    }
  }, [errors]);

  // returning what we need to use in other areas of form and will export/pull them in main form
  // returning errors object and pulling in main form
  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  };
};

export default useForm;
