import React, { useEffect, useState } from 'react';
import './WorkDetails.css';
import { Container, Col, Card, Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const WorkDetails = () => {
    const { workId } = useParams();
    const [works, setWorks] = useState([]);
    const [pro, setPro] = useState({});

    useEffect(() => {
        fetch('/worksDetails.json')
            .then(res => res.json())
            .then(data => setWorks(data.tree));
    }, [workId]);

    useEffect(() => {
        const foundWorks = works.find(wor => wor.id === workId)
        setPro(foundWorks);
    }, [works]);
    console.log(pro);

    return (
        <div className='w_full'>
            <Container>
                <h2>Projects Details {pro?.name}</h2>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={pro?.img} />
                        <Card.Body>
                            <Card.Title></Card.Title>
                            <Card.Text>
                            </Card.Text>
                            <Link style={{ textAlign: 'center' }} to={`/home`}><Button variant='outline-primary'>Back to home</Button></Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Container>
        </div>
    );
};

export default WorkDetails;