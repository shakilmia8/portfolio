import React from 'react';
import './Self.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import pic from '../../../images/shakil3.JPG';
import { Link } from 'react-router-dom';

const Self = () => {

    return (
        <div className='self_full'>
            <Container className='self_container'>
                <Row>
                    <Col xs={12} md={6} className='self_img'>
                        <img src={pic} alt="" />
                    </Col>
                    <Col xs={12} md={6} className='self_content'>
                        <h2>Md Tariqul Islam</h2>
                        <small>Full-Stack Developer</small> <br /><br />
                        <p>My background however has always been design-driven. I've always been excited with the idea of crafting something that people can interact with. Anyway, I am a full-stack web developer with solid knowledge in different technologies & enough experience in creating & designing super responsive websites. Also have a good experienced in creating modern SPA applications. I worked for over a year on full-stack web design and development.</p>

                        <Button variant="outline-primary"><a className='resume_link' href="https://drive.google.com/uc?id=1PdRGrw2yRgpv8_agHTEPZyvyV5xBTgCm&export=download">Download Resume</a></Button>
                        <Link to='/about'><Button variant="outline-primary">About Me</Button></Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Self;