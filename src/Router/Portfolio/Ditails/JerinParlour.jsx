import React from 'react';
import history from "../../../assets/Projects/engin-akyurt-g-m8EDc4X6Q-unsplash 1.png";
import { FaEye, FaFacebook, FaGithub, FaProjectDiagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const JerinParlour = () => {
    return (
        <div className='text-[#AFB3CA] pt-5 bg-gray-900 min-h-screen'>
            <div className='lg:flex flex-col md:flex-row justify-evenly gap-10 px-6 md:px-12'>
                <img src={history} className='md:h-[80vh] rounded-lg shadow-lg md:mb-5 lg:w-1/2' alt="History" />
                <div className='space-y-6'>
                    <h1 className='text-2xl font-bold text-white'>Enhancements and Features</h1>
                    <p className='text-lg'>Jerin's Parlour is a modern and professional beauty and grooming service center that focuses on enhancing natural beauty and providing exceptional customer service. With a team of skilled professionals and top-quality products, Jerin's Parlour offers a wide range of services tailored to meet the diverse beauty needs of its clients.</p>
                    <p className='font-semibold text-white'> Services </p>
                    <ul className='list-disc list-inside space-y-2'>
                        <li>Anti Age Face Treatment</li>
                        <li>Hair Color & Styling</li>
                        <li>Skin Care Treatment</li>
                    </ul>
                    <p className='font-semibold text-white'>Security Enhancements:</p>
                    <ul className='list-disc list-inside space-y-2'>
                        <li>Use HTTPS protocol and SSL certificates for secure communication.</li>
                        <li>Implement multi-factor authentication (MFA).</li>
                        <li>Apply input validation and sanitization to prevent SQL injection or XSS attacks.</li>
                    </ul>
                    <div className='flex space-x-4 mt-6'>
                        <a href='https://github.com/ibrahimkholilullah-web/App-review-client' target='_blank' rel='noopener noreferrer' className='text-white hover:text-gray-400'>
                            <FaGithub size={30} />
                        </a>
                        <a target='_blank' href='https://www.facebook.com/profile.php?id=100084535035397' rel='noopener noreferrer' className='text-white hover:text-gray-400'>
                            <FaFacebook size={30} />
                        </a>
                        <a target='_blank' 
                  href='https://web.whatsapp.com/ibrahimkhan1357910' rel='noopener noreferrer' className='text-white hover:text-gray-400'>
                            <FaWhatsapp size={30} />
                        </a>
                        <a href='https://twitter.com' target='_blank' rel='noopener noreferrer' className='text-white hover:text-gray-400'>
                            <FaTwitter size={30} />
                        </a>
                    </div>
                </div>
            </div>
            <div className='flex flex-col md:flex-row justify-evenly gap-10 my-7 items-center text-sm px-6 md:px-12'>
                <div className='md:w-1/2 space-y-4 text-white'>
                    <p className='font-bold'>Project Name <br />Jerin Parkour</p>
                    <h1>Home Page Features:</h1>
                    <ul>
                        <li>Includes a banner or slider at the top.</li>
                        <li> There's a section titled 'My Awesome Services,' showcasing the range of services offered by the parlor along with their respective pricing.</li>
                        <li>It has been studied that the review section where users leave a review about how they liked the services can be positive.</li>
                        <li>At the bottom, a footer is included.</li>
                    </ul>
                </div>
                <div className='md:w-1/2 space-y-4 text-white'>
                    <p className='mb-2 font-bold'>Live URL</p>
                    <a className='flex items-center gap-2 text-yellow-400 hover:text-yellow-300' href="https://app-review-285a6.web.app/">
                        <FaProjectDiagram size={25}/> Visit Project
                    </a>
                    <p className='font-semibold'>Technologies Used:</p>
                    <ul className='list-disc list-inside space-y-2'>
                        <li>Firebase: Used for data storage.</li>
                        <li>MongoDB: Utilized for backend data management.</li>
                        <li>React-simple-typewriter – For dynamic text animations.</li>
                        <li>Lottie React – For adding smooth and engaging animations.</li>
                        <li>React Icons – For integrating scalable vector icons.</li>
                    </ul>
                </div>
            </div>
            
        </div>
    );
};

export default JerinParlour;
