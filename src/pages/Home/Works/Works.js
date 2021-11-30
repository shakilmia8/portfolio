import React from 'react';
import './Works.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Works = () => {

    /* const w1 = 'https://i.ibb.co/LZqt4h6/1-1.png';
    const p1 = 'https://i.ibb.co/6RTnN2p/1.png';
    const p2 = 'https://i.ibb.co/ZX6ySNs/2.png';
    const p3 = 'https://i.ibb.co/3N5hWpY/3.png';
    const w2 = 'https://i.ibb.co/YX0PkWh/4-1.png';
    const p4 = 'https://i.ibb.co/0q6ZBY2/4.png';
    const p5 = 'https://i.ibb.co/JyVXh4C/5.png';
    const p6 = 'https://i.ibb.co/pXp39pt/6.png';
    const w3 = 'https://i.ibb.co/zbDGP0r/7-1.png';
    const p7 = 'https://i.ibb.co/Tg3wPDC/7.png';
    const p8 = 'https://i.ibb.co/b35Gkv8/8.png';
    const p9 = 'https://i.ibb.co/m0LcnjP/9.png';
    const w4 = 'https://i.ibb.co/5LH26RJ/10-1.png';
    const p10 = 'https://i.ibb.co/b6vRLSk/10.png';
    const p11 = 'https://i.ibb.co/fDc80DW/11.png';
    const p12 = 'https://i.ibb.co/JtPsqGG/12.png';
    const w5 = 'https://i.ibb.co/D7xn8cN/13-1.png';
    const p13 = 'https://i.ibb.co/vBvwyf8/13.png';
    const p14 = 'https://i.ibb.co/zQzGwb4/14.png';
    const p15 = 'https://i.ibb.co/t2MZDyM/15.png';
    const w6 = 'https://i.ibb.co/1Qbs8fk/16-1.png';
    const p16 = 'https://i.ibb.co/x12kBBj/16.png';
    const p17 = 'https://i.ibb.co/ftyHD55/17.png';
    const p18 = 'https://i.ibb.co/qxyn28j/18.png'; */

    const works = [
        {
            id: 1,
            name: "Automotor",
            type: "Single page web application",
            category: "Private car sell",
            technologies: "React Js, React Bootstrap, Material UI, React Router, CSS, Firebase Authentication",
            overview1: " 1. It's a website about eCommerce business with modern React technology.",
            overview2: " 2. Users can visit this site and choose your best product. ",
            overview3: " 3. User can reviews about products. ",
            img: "https://i.ibb.co/LZqt4h6/1-1.png",
            code: "https://github.com/shakilmia8/assignment-12-client",
            live: "https://assignment-12-abbcd.firebaseapp.com/",
        },
        {
            id: 2,
            name: "TravelTrip",
            type: "Single page web application",
            category: "Travel & Tours",
            technologies: "React Js, React Bootstrap, React Router, CSS, Firebase Authentication",
            overview1: " 1. It's a website about Travel Agency with modern React technology.",
            overview2: " 2. Users can visit this site and choose your best place. ",
            overview3: " 3. User can reviews about travel. ",
            img: "https://i.ibb.co/YX0PkWh/4-1.png",
            code: "https://github.com/shakilmia8/assignment-11-client",
            live: "https://assignment-11-d5732.web.app/",
        },
        {
            id: 3,
            name: "MediLife Care",
            type: "Single page web application",
            category: "Medical services",
            technologies: "React Js, React Bootstrap, React Router, CSS, Firebase Authentication",
            overview1: " 1. It's a website about Medical related with modern React technology.",
            overview2: " 2. Users can visit this site and choose your service. ",
            overview3: " 3. User see service details. ",
            img: "https://i.ibb.co/zbDGP0r/7-1.png",
            code: "https://github.com/shakilmia8/assignment-10",
            live: "https://assignment-10-41e58.web.app/",
        },
        {
            id: 4,
            name: "E-learning",
            type: "Single page web application",
            category: "Online learning",
            technologies: "React Js, React Bootstrap, React Router, CSS",
            overview1: " 1. It's a website about e-learning related with modern React technology.",
            overview2: " 2. You can visit this site and know about our courses. ",
            overview3: " 3. You see our course details. ",
            img: "https://i.ibb.co/5LH26RJ/10-1.png",
            code: "https://github.com/shakilmia8/assignment-9",
            live: "https://e-learning-bd.netlify.app/",
        },
        {
            id: 5,
            name: "ema-John",
            type: "Single page web application",
            category: "eCommerce based",
            technologies: "React Js, React Bootstrap, React Router, CSS, Firebase Authentication",
            overview1: " 1. It's a website about eCommerce related with modern React technology.",
            overview2: " 2. User can visit this site and choose your best products. ",
            overview3: " 3. User about our product details. ",
            img: "https://i.ibb.co/D7xn8cN/13-1.png",
            code: "https://github.com/shakilmia8/ema-john-client",
            live: "https://ema-jhon-simple-module-54.web.app/",
        },
        {
            id: 6,
            name: "PANDA",
            type: "Single page web application",
            category: "eCommerce based",
            technologies: "React Js, React Bootstrap, React Router, CSS",
            overview1: " 1. It's a website about eCommerce related with modern React technology.",
            overview2: " 2. User can visit this site and choose your best products. ",
            overview3: " 3. User about our product details. ",
            img: "https://i.ibb.co/1Qbs8fk/16-1.png",
            code: "https://github.com/shakilmia8/panda-commerce-bootstrap",
            live: "https://panda-anda-ecommerc.netlify.app/",
        },
    ]


    return (
        <Container className='works_container'>
            <h2>My Recent Projects</h2>
            <p>Here are a few design projects I've worked on recently.</p>
            <Row xs={1} md={3} className="g-4">
                {works.map((work) => (
                    <Col key={work.id}>
                        <Card>
                            <Card.Img className='works_img' variant="top" src={work.img} />
                            <Card.Body>
                                <Card.Title>{work.name}</Card.Title>
                                <div className='works_button'>
                                    <Link to={`/workDetails/${work.id}`}><Button variant='outline-primary'>Details</Button></Link>
                                    <Button variant='outline-primary'>
                                        <a href={work.live}>Live Site</a>
                                    </Button>
                                    <Button variant='outline-primary'>
                                        <a href={work.code}>Code Link</a>
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Works;