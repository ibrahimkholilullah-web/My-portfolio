import React from 'react';
import gadget from "../../../assets/Projects/banner.jpg"
import { FaEye, FaFacebook, FaGithub, FaProjectDiagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const Gadget = () => {
    return (
        <div className='text-[#AFB3CA] pt-5 bg-gray-900 min-h-screen'>
            <div className='lg:flex flex-col md:flex-row justify-evenly gap-10 px-6 md:px-12'>
            <img src={gadget} className='md:h-[80vh] md:mb-4 lg:w-1/2 rounded-lg shadow-lg' alt="History" />
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
                    <a href='https://github.com/ibrahimkholilullah-web' target='_blank' rel='noopener noreferrer' className='text-white hover:text-gray-400'>
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
            Gadget Heaven</p>
            <p className='text-gray-400'>Purpose <br />
            The Gadget Heaven project demonstrates a platform showcasing a variety of product categories, allowing users to purchase products based on their needs. It includes categories such as MacBook, Laptops, etc. Clicking on a category displays the available products, and if no products are available, it shows a No Data message.

            Clicking on a product displays all its details, including an Add to Cart button that adds the product to the Dashboard Cart. Additionally, clicking the Love button adds the product to the Wishlist. Users can later move products from the Wishlist to the Cart.
            
            Several features have been implemented in this project, making it user-friendly and functional.
                          </p>
            </div>
            <div className='md:w-1/2 space-y-4 text-white'>
                <p className='mb-2 font-bold'>Live URL</p>
                <a className='flex items-center gap-2 text-yellow-400 hover:text-yellow-300' href="https://tourmaline-liger-9fa337.netlify.app/">
                    <FaProjectDiagram size={25}/> Visit Project
                </a>
                <p className='font-semibold'>Features of the Website/Project</p>
                <ul className='list-disc list-inside space-y-2'>
                    <li>Dynamic Navbar</li>
                    <li>The Navbar background is sky blue when on the home page.</li>
                    <li>When navigating to other pages, the Navbar background changes to white.</li>
                    <li>Both the Navbar and Footer remain fixed at their positions.</li>
                    <li>The internal content changes dynamically based on the page routes without affecting the header or footer.</li>
                   
                </ul>
            </div>
           </div>
          
        </div>
    );
};

export default Gadget;
