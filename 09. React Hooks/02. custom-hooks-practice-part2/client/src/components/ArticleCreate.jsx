import { useForm } from '../hooks/useForm';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';

import UserContext from '../contexts/UserContext';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import FormGroup from 'react-bootstrap/esm/FormGroup';

export default function ArticleCreate() {
    const navigate = useNavigate();

    const { user } = useContext(UserContext);

    const initialFormValues = {
        title: '',
        content: '',
    };

    const formSubmitHandler = async (values) => {
        const response = await fetch('http://localhost:3030/jsonstore/advanced/articles/details', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...values, author: user.username }),
        });

        const result = await response.json();

        navigate(`/articles/${result._id}/details`);
    };

    const {
        values,
        changeHandler,
        submitHandler,
    } = useForm(initialFormValues, formSubmitHandler);

    return (
        <div>
            <Form style={{ width: '500px', margin: '50px auto' }} onSubmit={submitHandler}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        name="title"
                        placeholder="..."
                        value={values.title}
                        onChange={changeHandler}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        as="textarea"
                        name="content"
                        rows={3}
                        placeholder="..."
                        value={values.content}
                        onChange={changeHandler}
                    />
                </Form.Group>
                <FormGroup>
                    <Button type="submit" variant="success">Create</Button>
                </FormGroup>
            </Form>
        </div>
    );
}