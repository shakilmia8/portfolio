import React from 'react';
import './Contact.css';
import { Button, Container } from 'react-bootstrap';

const Contact = () => {

    return (
        <Container id='contact'>
            <div className='contact-container'>
                <div className='contact'>
                    <h1>CONTACT ME</h1>
                    <form action="">
                        <input className="contact-number" type="text" placeholder="Enter your first name" /><br /><br />
                        <input className="contact-number" type="text" placeholder="Enter your second name" />
                        <br />
                        <br />
                        <input className="contact-number" type="text" placeholder="Enter your e-mail" />
                        <br />
                        <br />
                        <input className="contact-number" type="number" placeholder="Enter your phone number" />
                        <br />
                        <br />
                        <textarea type="text" id="" cols="30" rows="10" placeholder="Enter your comment here..."></textarea>
                    </form>
                    <Button>Send Me Your Message</Button>
                </div>
                <div className='other'>
                    <h1>OTHER WAYS TO <br /> <span>CONTACT ME</span> </h1>
                    <a target='_blank' href="https://www.facebook.com/shakil.cpi.5"><i className="fab fa-facebook-square"></i></a>
                    <i className="fab fa-twitter-square"></i>
                    <i className="fab fa-linkedin"></i>
                </div>
            </div>
        </Container>
    );
};

export default Contact;
