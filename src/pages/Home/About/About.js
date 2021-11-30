import React from 'react';
import { Container } from 'react-bootstrap';
import './About.css';

const About = () => {
    const about = 'http://www.indiapicnic.com/wp-content/uploads/2021/04/About1.jpg';
    return (
        <div className='about_full'>
            <img src={about} alt="" />
            <Container className='about_container'>
                <h2>About Me</h2>
                <p>Looking for an entry-level position as a web developer in a dynamic firm that values my analytical and technical skills and gives me the opportunity to update my knowledge, I am looking for a company that will contribute to my personal growth as well as its development. Also, I will be regularly committed to developing my skills.</p>

                <p>Willing to build up my carrier in reputable national or multinational organization, including industry, etc. That enquires innovative and challenging employment and offer structured career advancement to extent of competitive and dynamic field.</p>
            </Container>
        </div>
    );
};

export default About;