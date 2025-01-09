import React from 'react';
import { FaFacebookF, FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import onner from "../../../../../assets/Onner Image/onner.jpeg"
const Banner = () => {
    return (
        <div className="hero pt-24 min-h-screen">
        <div className=" lg:flex justify-between items-center w-10/12 gap-10 flex-col md:flex-row-reverse">
          <div className='lg:w-1/2'>
          <img
            className='lg:w-3/4 w-2/4 mx-auto rounded-full  p-1 shadow-2xl shadow-black '
            src={onner} />
          </div>
          <div className='lg:w-1/2'>
          <h3 className='text-3xl font-bold my-1'>Hello, <span className='text-[#F6083A]'>I'm</span></h3>
            <h1 className="md:text-5xl text-3xl my-3 font-bold">Ibrahim Kholilulla</h1>
            <h4 className='md:text-2xl text-lg my-2 '>Web Designer And Web Developer</h4>
            <p className="py-6 text-[#AFB3CA]">
            "Professional Web Design & Development Services: Create stunning, responsive websites that drive results. Expert designers and developers ensuring seamless user experiences, modern designs, and cutting-edge functionality. Let's build your online success!"
            </p>
            <p className=' my-2 uppercase'> Find Me on</p>
            <div className=' flex items-center gap-8 my-4'>
            <a 
               target='_blank' 
               href='https://www.facebook.com/profile.php?id=100084535035397' 
               className='flex justify-center items-center p-2 w-12 h-12 bg-[#232832] rounded-lg hover:bg-blue-600 transition-all duration-300'
             >
               <FaFacebookF size={20} className='text-white' />
             </a>

                <a target='_blank' href='https://www.linkedin.com/in/ibrahim-kholilullah23/' className='p-2 w-12 h-12 bg-[#232832] rounded-lg flex justify-center items-center hover:bg-[#1ebea5] transition-all'><FaLinkedinIn className='text-white' size={20} />
                </a>
               
                <a 
                  target='_blank' 
                  href='https://web.whatsapp.com/ibrahimkhan1357910' // Update with your WhatsApp phone number (include country code)
                  className='p-2 w-12 h-12 bg-[#232832] rounded-lg flex justify-center items-center hover:bg-[#1ebea5] transition-all'
                >
                  <FaWhatsapp className='text-white' size={20} />
                </a>
                <a 
                  target='_blank' 
                  href='https://github.com/ibrahimkholilullah-web' // Update with your WhatsApp phone number (include country code)
                  className='p-2 w-12 h-12 bg-[#232832] rounded-lg flex justify-center items-center hover:bg-[#1ebea5] transition-all'
                >
                  <FaGithub className='text-white' size={20} />
                </a>
               
                
                
            </div>
            <div className='my-4'>
            <a href='/Resume.pdf' download='Resume.pdf' className="btn rounded-3xl hover:text-[#F6083A] hover:bg-white border-none  bg-[#F6083A] px-8 text-[16px]  text-white uppercase">Download CV</a>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;