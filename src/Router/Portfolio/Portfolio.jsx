import React from 'react';
import Navber from './Page/Home/Navber';
import { Outlet } from 'react-router-dom';
import Footer from './Page/Home/Footer';

const Portfolio = () => {
    return (
        <div className='container mx-auto'>
            <div className=''>
            <Navber></Navber>
            </div>
            <div className='container mx-auto'>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Portfolio;