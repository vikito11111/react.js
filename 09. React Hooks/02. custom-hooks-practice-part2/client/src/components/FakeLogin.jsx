import { useContext } from 'react';
import { useForm } from '../hooks/useForm';
import { Navigate, useNavigate } from 'react-router-dom';

import UserContext from '../contexts/UserContext';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const loginFormInitialValues = {
    username: '',
    password: '',
};

function FakeLogin() {
    const { login } = useContext(UserContext);

    const nagivate = useNavigate();

    function loginSubmitHandler({ username, password }) {
        login(username, password);

        nagivate('/');
    }

    const {changeHandler, submitHandler, values} = useForm(loginFormInitialValues, loginSubmitHandler);

    return (
        <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Username</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="....." 
                    value={values.username} 
                    name="username" 
                    onChange={changeHandler} 
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                    type="password" 
                    value={values.password} 
                    name="password"
                    onChange={changeHandler} 
                />
            </Form.Group>

            <Form.Group>
                <Button type="submit">Login</Button>
            </Form.Group>
        </Form>
    );
}

export default FakeLogin;