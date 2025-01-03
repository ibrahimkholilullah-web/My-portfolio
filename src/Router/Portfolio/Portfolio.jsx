import React from 'react';
import Navber from './Page/Home/Navber';
import { Outlet } from 'react-router-dom';
import Footer from './Page/Home/Footer';

const Portfolio = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Portfolio;