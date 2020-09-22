


function validateForm(values) {
    let errors = {};
    if(!values.name) {
        errors.name = "Name is required";
    }

    
    if(!values.phone) {
        errors.phone = "Phone is required";
    }

    if(!values.email){
        errors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email address is invalid";
    }


  



    return errors;
}

export default validateForm;