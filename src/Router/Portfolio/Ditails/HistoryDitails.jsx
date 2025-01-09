import React from 'react';
import history from "../../../assets/Projects/extra1photo.jpg"
import { FaEye, FaFacebook, FaGithub, FaProjectDiagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const HistoryDitails = () => {
    return (
        <div className='text-[#AFB3CA] pt-40 bg-gray-900 min-h-screen'>
            <div className='flex flex-col md:flex-row justify-evenly gap-10 px-6 md:px-12'>
            <img src={history} className='md:h-[80vh] md:w-1/2 rounded-lg shadow-lg' alt="History" />
            <div className='space-y-6'>
                <h1 className='text-2xl font-bold text-white'>Enhancements and Features</h1>
                <p className='text-lg'>I think this website needs more feature increments and security enhancements to make it more secure. Firstly, this website needs to be upgraded with better technologies. Then animations should be added to the website, which are commonly used in modern websites. Additionally, attention should be given to making every option on this website simple and user-friendly.</p>
                <p className='font-semibold text-white'>Feature Increments:</p>
                <ul className='list-disc list-inside space-y-2'>
                    <li>Add interactive features like dynamic forms, chatbots, or user dashboards.</li>
                    <li>Integrate APIs for additional functionalities like payment gateways, notifications, etc.</li>
                </ul>
                <p className='font-semibold text-white'>Security Enhancements:</p>
                <ul className='list-disc list-inside space-y-2'>
                    <li>Use HTTPS protocol and SSL certificates for secure communication.</li>
                    <li>Implement multi-factor authentication (MFA).</li>
                    <li>Apply input validation and sanitization to prevent SQL injection or XSS attacks.</li>
                </ul>
                <div className='flex space-x-4 mt-6'>
                    <a  href='https://github.com/ibrahimkholilullah-web' target='_blank' rel='noopener noreferrer' className='text-white hover:text-gray-400'>
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
            <p className='font-bold'>Project Name <br />
            Global Art History</p>
            <p className='text-gray-400'>Purpose <br />
            Historical artifacts are essential components of past civilizations, connecting us to our history, culture, and heritage. Their primary purposes include:</p>
            <p>Preservation of History: Serving as records of past events, lifestyles, and cultures.</p>
            <p>Education: Educating future generations about the past and raising awareness of their heritage.</p>
            <p>Cultural Development: Helping understand the lifestyle and contributions of various communities over time.</p>
            <p>Tourism and Economy: Playing a vital role in the tourism industry and contributing to the local economy.</p>
            <p>Heritage Protection: Preserving traditions as a part of a nation's pride and identity.</p>
            <p>These artifacts bridge our past with the present and serve as a valuable legacy for the future.</p>
            <p>This project, Global Art History, is a responsive web application. Its primary goal is to allow users to add an artifact and enable all users to view them via the website.</p>
            </div>
            <div className='md:w-1/2 space-y-4 text-white'>
                <p className='mb-2 font-bold'>Live URL</p>
                <a className='flex items-center gap-2 text-yellow-400 hover:text-yellow-300' href="https://national-history.firebaseapp.com">
                    <FaProjectDiagram size={25}/> Visit Project
                </a>
                <p className='font-semibold'>Key Features</p>
                <ul className='list-disc list-inside space-y-2'>
                    <li>Home Page: Contains a carousel, two additional sections, and a "Featured Artifacts" section.</li>
                    <li>Add Artifact Page: Allows users to add an artifact with attributes like name and photo.</li>
                    <li>All Artifacts Page: Displays all artifact cards.</li>
                    <li>My Artifacts Page: Shows artifacts added by the user with options to update or delete them.</li>
                    <li>Liked Artifacts Page: Displays all artifacts liked by the user.</li>
                    <li>Featured Artifacts Section: Displays six cards of artifacts with the highest likes first.</li>
                </ul>
            </div>
           </div>
           <div className='px-6 md:px-12'>
            <div className='md:flex items-center justify-evenly gap-10 text-white'>
            <p><span className='text-yellow-400 uppercase'>npm Packages Used</span> <br />
npm react-icons: For adding icons to the UI. <br />
npm react-responsive-carousel: For creating carousels. <br />
npm typerwriter-effect: For dynamic text effects. <br />
npm react-helmet-async: For managing document head elements like meta tags. <br />
npm react-hot-toast: For adding user-friendly notifications. <br />
npm lottie-react: For integrating animations.</p>
            </div>
           </div>
        </div>
    );
};

export default HistoryDitails;
