import { useForm } from '../hooks/useForm';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import FormGroup from 'react-bootstrap/esm/FormGroup';

export default function ArticleCreate() {
    const initialFormValues = {
        title: '',
        content: ''
    };

    const formSubmitHandler = (values) => {
        // TODO: Tomorrow
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