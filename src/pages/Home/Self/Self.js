import React from 'react';
import './Self.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import pic from '../../../images/shakil3.JPG';

const Self = () => {
    return (
        <Container className='self_container'>
            <Row>
                <Col xs={12} md={6} className='self_img'>
                    <img src={pic} alt="" />
                </Col>
                <Col xs={12} md={6} className='self_content'>
                    <h2>Md Tariqul Islam</h2>
                    <small>Full-Stack Web Developer</small>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum quasi quia accusantium. At, iusto architecto quae dolore doloremque perferendis, voluptatibus dolor eveniet provident quisquam, dignissimos quasi tempore quibusdam facilis.</p>

                    <Button variant="outline-primary"><a className='resume_link' href="https://drive.google.com/uc?id=1Phn6BH_lvPVrgBxzsajW24sk7ZdClZqn&export=download">Download Resume</a></Button>{'  '}
                    <Button variant="outline-primary">Contact</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default Self;