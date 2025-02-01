import React from 'react';
import Shared from '../Shared/Shared';

const AboutMySelp = () => {
    return (
        <div className='container mx-auto mt-10'>
            <h1 className='md:text-3xl text-lg text-center uppercase my-8'>frequently asked question</h1>
            <div className=' lg:w-8/12 mx-auto px-6 *:my-2'>
            <div className="collapse bg-[#374151]">
             <input type="radio" name="my-accordion-1" defaultChecked />
             <div className="collapse-title md:text-xl text-white text-lg font-medium"> 1 .  What technologies do you specialize in?</div>
             <div className="collapse-content text-sm text-[#FACC15]">
               <p>I specialize in MERN Stack Development (MongoDB, Express.js, React.js, Node.js). Additionally, I have experience with  Next.js, Tailwind CSS, Firebase, and APIs for building scalable applications.</p>
             </div>
           </div>
           <div className="collapse bg-[#374151]">
             <input type="radio" name="my-accordion-1" />
             <div className="collapse-title md:text-xl text-white text-lg font-medium"> 2 . Can you build a fully responsive website?</div>
             <div className="collapse-content text-sm text-[#FACC15]">
               <p>Absolutely! I develop websites that are mobile-friendly, fast, and optimized for all screen sizes using Tailwind CSS, Bootstrap, and custom CSS techniques.</p>
             </div>
           </div>
           <div className="collapse bg-[#374151]">
             <input type="radio" name="my-accordion-1" />
             <div className="collapse-title md:text-xl text-white text-lg font-medium"> 3 . Do you offer backend development services?</div>
             <div className="collapse-content text-sm text-[#FACC15]">
               <p>Yes! I build secure and scalable backend solutions using Node.js, Express.js, and MongoDB. I also integrate third-party services like Firebase, Stripe.</p>
             </div>
           </div>
           <div className="collapse bg-[#374151]">
             <input type="radio" name="my-accordion-1" />
             <div className="collapse-title md:text-xl text-white text-lg font-medium">4 . How can I contact you for a project?</div>
             <div className="collapse-content text-sm text-[#FACC15]">
               <p> 📩 Email : ibrahimkholilt56@gmail.com</p>
             </div>
           </div>
        </div>
        </div>
    );
};

export default AboutMySelp;