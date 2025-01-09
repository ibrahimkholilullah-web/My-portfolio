import React from 'react';
import Banner from './Banner/Banner';
import Education from './Skills&Edu/Education';
import Projects from './Projects';
import Contact from '../../Contact/Contact';

const Home = () => {
    return (
        <div className='pt-10'>
            <Banner></Banner>
            <Education></Education>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;