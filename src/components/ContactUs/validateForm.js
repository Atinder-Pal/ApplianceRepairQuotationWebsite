

// new state for errors
// function that validate these errors - function validateForm
// pass these errors back to form.js

//values object
//name phone email = key
function validateForm(values) {

    //creating errors object and returning it
    let errors = {};

    if (!values.name) {
        errors.name = "Name is required";
    }


    if (!values.phone) {
        errors.phone = "Phone is required";
    }
    else if(values.phone.length < 10) {
        errors.phone = "Phone needs to be more than 10 characters with area code";
    }

    if (!values.email) {
        errors.email = "Email address is required";
    } 
    // regex - regular expression @ , ., caseinsensitive  compare right side to left and return true or false
    // If not true or false, return/add error
    else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email address is invalid";
    }


    return errors;
}

export default validateForm;