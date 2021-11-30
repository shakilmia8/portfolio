import React from 'react';
import Contact from '../Contact/Contact';
import Works from '../Works/Works';
import Blogs from '../Blogs/Blogs';
import Self from '../Self/Self';

const Home = () => {
    return (
        <div>
            <Self></Self>
            <Works></Works>
            <Blogs></Blogs>
            <Contact></Contact>
        </div>
    );
};

export default Home;