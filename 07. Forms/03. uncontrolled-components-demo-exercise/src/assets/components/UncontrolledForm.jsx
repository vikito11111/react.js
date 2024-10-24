import { useState } from "react";

export default function UncontrolledForm() {
    const [user, setUser] = useState({});

    function onFormSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        console.log(formData.get('username'));
        console.log(formData.get('password'));
        console.log(formData.get('email'));

        setUser({
            username: formData.get('username'),
            password: formData.get('password'),
            email: formData.get('email'),
        });
    }

    function onLogoutClick() {
        setUser({});
    }

    return (
        <div>
            <h1>Uncontrolled Form:</h1>

            {user.username
                ? <p>Hello {user.username}! <button onClick={onLogoutClick}></button></p>
                : (
                    <form onSubmit={onFormSubmit}>
                        <div>
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" id="username" />
                        </div>

                        <div>
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="passworld" />
                        </div>

                        <div>
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" />
                        </div>

                        <div>
                            <input type="submit" value="Login" />
                        </div>
                    </form>
                )
            }
        </div>
    );
}