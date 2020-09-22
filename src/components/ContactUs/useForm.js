

import{useState, useEffect} from 'react';


const useForm = (callback, validate) => {
    const [values, setValues] = useState({name:"", phone:"", email:"", message:""});

    const [errors, setErrors] = useState({});

    const [isSubmitting, setIsSubmitting] = useState (false);

    const handleChange = e => {
        const {name, value} = e.target;

        // console.log(e.target.name);
        // console.log(e.target.value);
        setValues({
                ...values,
                // [e.target.name]:e.target.value
                [name] : value
            });
    };


    const handleSubmit = (e) => {
    e.preventDefault();
    callback(values);
    setErrors(validate(values));
    setIsSubmitting(true);
    // submit();

    };

    useEffect(() => {
        if(Object.keys(errors).length === 0 && isSubmitting){
            callback();
        }
    } , [errors]);

    return{
        handleChange, handleSubmit, values, errors
    };
};

export default useForm;
