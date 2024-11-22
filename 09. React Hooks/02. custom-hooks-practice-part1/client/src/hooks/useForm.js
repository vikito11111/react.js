import { useState } from "react"

export function useForm(initialValues, submitCallback) {
    const [values, setValues] = useState(initialValues);

    function changeHandler(e) {
        setValues(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    function submitHandler(e) {
        e.preventDefault();

        // TODO: Validations
        submitCallback(values);
    }

    return {
        values,
        changeHandler,
        submitHandler,
    }
}