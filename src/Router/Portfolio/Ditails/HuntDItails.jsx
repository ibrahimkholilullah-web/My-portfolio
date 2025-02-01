import React from 'react';
import gadget from "../../../assets/Projects/banner2.jpg"
import { FaEye, FaFacebook, FaGithub, FaProjectDiagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const HuntDItails = () => {
    return (
        <div className='text-[#AFB3CA] pt-5 bg-gray-900 min-h-screen'>
            <div className='lg:flex flex-col md:flex-row justify-evenly gap-10 px-6 md:px-12'>
            <img src={gadget} className='md:h-[80vh] pb-4 md:mb-4 lg:w-1/2 rounded-lg shadow-lg' alt="History" />
            <div className='space-y-6'>
                <h1 className='text-2xl font-bold text-white'>Enhancements and Features</h1>
                <p className='text-lg'>This is a Product Hunt website. It includes user, moderator, and admin dashboards. When a user signs up or logs in using Google, all their data is stored in the database. If the user later logs in again with the same Gmail account, duplicate entries are avoided. The website is fully responsive and designed with a user-friendly UX for all devices. Using a new user token, members can access offers and subscriptions. For added security, JWT tokens have been implemented.</p>
                <p className='font-semibold text-white'>Admin make use of this website.</p>
                <ul className='list-disc list-inside space-y-2'>
                    <li>The admin can view how many users have accessed the website, how many products are pending, and how many products have been approved.</li>
                    <li>The admin can change the roles of any user and can also assign them as moderators if desired.</li>
                    <li>The admin can add offer tokens, and they also have the ability to delete or update them if needed.</li>
                    <li>Admin email : shakibislam@gmail.com Admin password : 1234Abcd@</li>
                </ul>
                <p className='font-semibold text-white'>Main Technologies Used</p>
                <ul className='list-disc list-inside space-y-2'>
                    <li>Front-End: React, Tailwind CSS,</li>
                    <li>Back-End: Node.js, Express.js, MongoDB</li>
                    <li>ools: Axios, Firebase.</li>
                </ul>
                <div className='flex space-x-4 mt-6'>
                    <a href='https://github.com/ibrahimkholilullah-web/hunt-denmark' target='_blank' rel='noopener noreferrer' className='text-white hover:text-gray-400'>
                        <FaGithub size={30} />
                    </a>
                    <a  href='https://www.facebook.com/profile.php?id=100084535035397' target='_blank' rel='noopener noreferrer' className='text-white hover:text-gray-400'>
                        <FaFacebook size={30} />
                    </a>
                    <a target='_blank' 
                  href='https://web.whatsapp.com/ibrahimkhan1357910'  rel='noopener noreferrer' className='text-white hover:text-gray-400'>
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
            HUND Denmark</p>
            <p className='text-gray-400'>Users make use of this website. <br />
            Users can add products to this website. However, to display the products on the website, the moderator’s permission is required.
             Users can delete or update all the products they have added.
             Additionally, users can purchase subscriptions with money. If they use a coupon, they will receive a discount on the price.
                                       </p>
            </div>
            <div className='md:w-1/2 space-y-4 text-white'>
                <p className='mb-2 font-bold'>Live URL</p>
                <a className='flex items-center gap-2 text-yellow-400 hover:text-yellow-300' href="https://last-project-abb90.web.app/">
                    <FaProjectDiagram size={25}/> Visit Project
                </a>
                <p className='font-semibold'>Features of the Website/Project</p>
                <ul className='list-disc list-inside space-y-2'>
                    <li>User-friendly interface</li>
                    <li>Responsive design</li>
                    <li>Secure authentication and authorization</li>
                    <li>Subscription management</li>
                    <li>Moderation features for products</li>
                    <li>Dynamic homepage with moderator-approved products</li>
                    <li>Token-based discount system</li>
                   
                </ul>
            </div>
           </div>
          
        </div>
    );
};

export default HuntDItails;
