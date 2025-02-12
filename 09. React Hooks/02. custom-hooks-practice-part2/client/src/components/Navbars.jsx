import { Link } from 'react-router-dom';
import { useContext } from 'react';

import UserContext from '../contexts/UserContext';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Navbars() {
    const { user } = useContext(UserContext);

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand as={Link} to="/">Articles</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/articles/create">Create Article</Nav.Link>
                        <Nav.Link as={Link} to="/fake-login">Fake Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Text>{user.username ? user.username : 'Guest'}</Navbar.Text>
            </Container>
        </Navbar>
    );
}