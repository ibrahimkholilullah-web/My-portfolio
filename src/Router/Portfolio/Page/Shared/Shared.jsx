import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../Animatons/variants';
const Shared = ({title, headline}) => {
    return (
        <motion.div 
        variants={fadeIn('up', 0.2)}
    initial='hidden'
    whileInView={'show'}
    viewport={{once: false,amount: 0.7}}
        className=' my-10 pb-10 '>
            <p className='text-[#F6083A]  uppercase '>{title}</p>
            <h3 className='md:text-5xl font-bold text-3xl my-3  rounded-xl md:w-96 py-2 '>{headline}</h3>
        </motion.div>
    );
};

export default Shared;