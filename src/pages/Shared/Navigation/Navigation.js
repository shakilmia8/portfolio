import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Navigation = () => {
    return (
        <Navbar collapseOnSelect expand="lg" fixed="top" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/home">Portfolio</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link target='_blank' href="https://drive.google.com/file/d/1PdRGrw2yRgpv8_agHTEPZyvyV5xBTgCm/view">Resume</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;