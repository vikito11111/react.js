import { useEffect, useRef, useState } from "react";

export default function ControlledForm() {
    const [formValues, setFormValues] = useState({
        username: '',
        password: '',
        email: '',
        age: '',
    });

    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    })

    useEffect(() => {
        (async () => {
            const response = await fetch('http://localhost:3030/jsonstore/advanced/profiles/fb352199-bcbc-4e1d-a1dc-ed346a6fb49a');
            const result = await response.json();

            //setUsername(result.username);
        })();
    }, []);

    function formSubmitHandler(e) {
        e.preventDefault();

        console.log('Form Submitted');
    };

    function changeHandler(e) {
        setFormValues(oldValues => ({
            ...oldValues,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <>
            <h1>Controlled Form</h1>

            <form onSubmit={formSubmitHandler}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        ref={inputRef}
                        name="username"
                        id="username"
                        value={formValues.username}
                        onChange={changeHandler}
                    />
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={formValues.password}
                        onChange={changeHandler}
                    />
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={formValues.email}
                        onChange={changeHandler}
                    />
                </div>

                <div>
                    <label htmlFor="age">Age</label>
                    <input
                        type="number"
                        name="age"
                        id="age"
                        value={formValues.age}
                        onChange={changeHandler}
                    />
                </div>

                <div>
                    <input type="submit" value="Login" />
                </div>

                {/* const [username, setUsername] = useState('');
                const [password, setPassword] = useState(''); */}

                {/* useEffect(() => {
                    (async () => {
                        const response = await fetch('http://localhost:3030/jsonstore/advanced/profiles/fb352199-bcbc-4e1d-a1dc-ed346a6fb49a');
                        const result = await response.json();

                        setUsername(result.username);
                    })();
                }, []); */}

                {/* function usernameChangeHandler(e) {
                        setUsername(e.target.value);
                    }; */}

                {/* function passwordChangeHandler(e) {
                        setPassword(e.target.value);
                    }; */}

                {/* <div>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        value={username}
                        onChange={usernameChangeHandler} or onChange={(e) => setUsername(e.target.value)}
                    />
                </div> */}

                {/* <div>
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password"
                        name="password"
                        id="password"
                        value={password}
                        onChange={passwordChangeHandler} or onChange={(e) => setPassword(e.target.value)}
                    />
                </div> */}
            </form>
        </>
    );
}