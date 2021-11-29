import React from 'react';
import './NotFound.css';
import { useNavigate } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';

const NotFound = () => {
    const navigate = useNavigate();
    const handleClickedHome = () => {
        navigate('/');
    }
    return (
        <Container className='notfound_container'>
            <div className="notfound">
                <i className='far fa-frown-open'></i>
                <h1>4<span>0</span>4</h1>
                <h2>Page Not Found</h2>
                <Button onClick={handleClickedHome}>Go Home</Button>
            </div>
        </Container>
    );
};

export default NotFound;