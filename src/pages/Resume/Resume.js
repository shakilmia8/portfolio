import React from 'react';
import { Container, Button } from 'react-bootstrap';
import './Resume.css';

const Resume = () => {
    return (
        <Container className="resume_container">
            <h1>HELLO!!!!!!</h1>
            <Button variant="outline-primary"><a className='resume_link' href="https://drive.google.com/uc?id=1Phn6BH_lvPVrgBxzsajW24sk7ZdClZqn&export=download">Download Resume</a></Button>
        </Container>
    );
};

export default Resume;