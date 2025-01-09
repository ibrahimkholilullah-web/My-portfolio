import React from 'react';
import Shared from '../Shared/Shared';
import projects1 from "../../../../assets/Projects/extra1photo.jpg"
import projects2 from "../../../../assets/Projects/banner3.png"
import projects3 from "../../../../assets/Projects/banner.jpg"

import { FaEye, FaGithub, FaProjectDiagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Projects = () => {
    return (
        <div className='px-2'>
            <Shared
            title='My recent work'
            headline="Recent Works"
            ></Shared>

            <div className='grid grid-cols-1 gap-5 my-10 md:grid-cols-2 lg:grid-cols-3'>
                <div className='border p-2 h-96 relative rounded-lg '>
                    <img className=' w-full h-full rounded-xl opacity-70 opacity-black ' src={projects1} alt="" />
                   <div className='-mt-52 p-2 absolute'>
                   <p className='text-lg font-bold'>Global Art History</p>
                    <p>Global Art History explores artistic traditions across cultures, examining interconnected influences, styles, and meanings in diverse historical and contemporary contexts.</p>
                    <div className='flex items-center gap-2'>
                    <a className='flex items-center gap-2 text-yellow-400 hover:text-yellow-300' href="https://national-history.firebaseapp.com">
                                        <FaProjectDiagram size={25}/>
                                    </a>
                    <a  target="_blank" href='https://github.com/ibrahimkholilullah-web/global-Art-History' className=' border-[#F6083A]  bg-[#232832] p-1 rounded-md my-2'><FaGithub className='border-2 border-[#F6083A] rounded-full ' size={25} /></a>
                    
                    <Link to='/historyDetails' >View Ditails</Link>
                    </div>
                   </div>
                    
                </div>
                <div className='border p-2 h-96 relative rounded-lg '>
                    <img className=' w-full h-full rounded-xl opacity-70 opacity-black ' src={projects2} alt="" />
                   <div className='-mt-52 p-2 absolute'>
                   <p className='text-lg font-bold'>Trevel World</p>
                    <p>Travel World offers diverse destinations, cultural experiences, natural wonders, adventures, history, cuisine, and unforgettable memories globally.</p>
                    <div className='flex items-center gap-2'>
                    <a  target="_blank" href='https://b10-a10-projects.web.app/' className='flex items-center gap-2 text-yellow-400 hover:text-yellow-300'><FaProjectDiagram size={25} /></a>
                    <a  target="_blank" href='https://github.com/ibrahimkholilullah-web/Trevel-World' className=' border-[#F6083A]  bg-[#232832] p-1 rounded-md my-2'><FaGithub className='border-2 border-[#F6083A] rounded-full ' size={25} /></a>
                    
                    <Link to="/travelDitails">View Ditails</Link>
                    </div>
                   </div>
                    
                </div>
                <div className='border h-96 p-2 relative rounded-lg '>
                    <img className=' w-full h-full rounded-xl opacity-70 opacity-black ' src={projects3} alt="" />
                   <div className='-mt-52 p-2 absolute'>
                   <p className='text-lg font-bold'>Ggadget Heaven</p>
                    <p>An eCommerce website facilitates online shopping, offering diverse products, secure payments, personalized experiences, and seamless delivery services worldwide.</p>
                    <div className='flex items-center gap-2'>
                    <a target="_blank" href='https://tourmaline-liger-9fa337.netlify.app/' className='flex items-center gap-2 text-yellow-400 hover:text-yellow-300'><FaProjectDiagram size={25} /></a>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/ibrahimkholilullah-web/gadgetHeaven"
                      className="border-[#F6083A] bg-[#232832] p-2 rounded-md my-2 inline-flex items-center justify-center"
                    >
                      <FaGithub
                        className="border-2 border-[#F6083A] rounded-full"
                        size={25}
                      />
                    </a>
                    
                    <Link to="/GadgetDitails">View Ditails</Link>
                    </div>
                   </div>
                    
                </div>
                
                
            </div>
        </div>
    );
};

export default Projects;