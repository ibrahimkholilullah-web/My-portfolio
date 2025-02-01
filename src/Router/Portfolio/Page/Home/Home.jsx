import React from 'react';
import Banner from './Banner/Banner';
import Education from './Skills&Edu/Education';
import Projects from './Projects';
import Contact from '../../Contact/Contact';
import Abouts from './About/Abouts';
import AboutMySelp from './AboutMySelp';

const Home = () => {
    return (
        <div className='pt-10'>
            <Banner></Banner>
            <Education></Education>
            <Projects></Projects>
            <AboutMySelp></AboutMySelp>
            <Abouts></Abouts>
            <Contact></Contact>
        </div>
    );
};

export default Home;