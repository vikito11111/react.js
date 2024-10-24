import { useEffect, useState } from "react";

export default function ControlledForm() {
    const [formValues, setFormValues] = useState({
        username: '',
        password: '',
        email: '',
        age: '',
    });

    useEffect(() => {
        (async () => {
            const response = await fetch('http://localhost:3030/jsonstore/advanced/profiles/fb352199-bcbc-4e1d-a1dc-ed346a6fb49a');
            const profile = await response.json();
        })();
    }, []);

    function onFormSubmit(e) {
        e.preventDefault();

        console.log('Form Submitted.');
    };

    function onFormValueChange(e) {
        setFormValues(oldFormValue => ({
            ...oldFormValue, 
            [e.target.name]: [e.target.value],
        }));
    };

    return (
        <div>
            <h1>Controlled Form:</h1>

            <form onSubmit={onFormSubmit}>
                <div>
                    <label htmlFor="username">Username: </label>
                    <input 
                        type="text" 
                        name="username" 
                        id="username" 
                        placeholder="Enter username"
                        value={formValues.username}
                        onChange={onFormValueChange}
                    />
                </div>

                <div>
                    <label htmlFor="password">Password: </label>
                    <input 
                        type="password" 
                        name="password" 
                        id="passworld" 
                        placeholder="Enter password" 
                        value={formValues.password} 
                        onChange={onFormValueChange}
                    />
                </div>

                <div>
                    <label htmlFor="email">Email: </label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        placeholder="Enter email" 
                        value={formValues.email} 
                        onChange={onFormValueChange}
                    />
                </div>

                <div>
                    <label htmlFor="age">Age: </label>
                    <input 
                        type="number" 
                        name="age" 
                        id="age" 
                        placeholder="Enter age" 
                        value={formValues.age} 
                        onChange={onFormValueChange} 
                    />
                </div>

                <div>
                    <input type="submit" value="Login" />
                </div>
            </form>
        </div>
    );
}