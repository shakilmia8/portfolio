import React from 'react';
import './Blogs.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Blogs = () => {
    const navigate = useNavigate();
    const handleBlogClick = () => {
        navigate('/blog');
    }

    const img = 'https://i.ibb.co/ngtJZGk/19.png';

    const blogs = [
        {
            title: 'Blog Title 1',
            date: 'November 30, 2021',
            describe: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat fuga sit vel minima dolores quod magni necessitatibus corporis molestias beatae! Illo molestiae corporis quisquam voluptatum eveniet est architecto! Voluptas, ipsum?",
        },
        {
            title: 'Blog Title 2',
            date: 'November 30, 2021',
            describe: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat fuga sit vel minima dolores quod magni necessitatibus corporis molestias beatae! Illo molestiae corporis quisquam voluptatum eveniet est architecto! Voluptas, ipsum?",
        },
        {
            title: 'Blog Title 3',
            date: 'November 30, 2021',
            describe: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat fuga sit vel minima dolores quod magni necessitatibus corporis molestias beatae! Illo molestiae corporis quisquam voluptatum eveniet est architecto! Voluptas, ipsum?",
        },
        {
            title: 'Blog Title 4',
            date: 'November 30, 2021',
            describe: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat fuga sit vel minima dolores quod magni necessitatibus corporis molestias beatae! Illo molestiae corporis quisquam voluptatum eveniet est architecto! Voluptas, ipsum?",
        },
    ]

    return (
        <div className='blogs_full'>
            <Container>
                <h2>Blogs</h2>
                <Row xs={1} md={4} className="g-4">
                    {blogs.map((blog) => (
                        <Col key={blog.title}>
                            <Card>
                                <Card.Img variant="top" src={img} />
                                <Card.Body>
                                    <Card.Title>{blog.title}</Card.Title>
                                    <Card.Title>{blog.date}</Card.Title>
                                    <Card.Text className='blogs_text'>
                                        {blog.describe}
                                    </Card.Text>
                                    <Button onClick={handleBlogClick} variant='outline-primary'>See More</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Blogs;