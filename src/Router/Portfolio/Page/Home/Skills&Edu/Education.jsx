import React, { useEffect, useState } from 'react';
import Shared from '../../Shared/Shared';
import Card from './Card';
import { motion } from 'framer-motion';
import { fadeIn } from '../../../Animatons/variants';
fadeIn
const Education = () => {
  const [tac, setTec] = useState([]);

  useEffect(() => {
    fetch('/tachnology.json')
      .then((res) => res.json())
      .then((data) => setTec(data));
  }, []);

  return (
    <div className="w-11/12 mx-auto">
      {/* Header Section */}
      <div>
        <Shared title="Years of Education" headline="My Resume" />
      </div>

      <div className="  md:flex-row justify-between gap-10 my-10">
        {/* Skills Section */}
        <div className=" border-b-2 md:border-b-0  border-gray-300 pb-10 md:pb-0">
          <h1 className="text-3xl font-bold text-center md:text-left mb-4">My Skills</h1>
          <p className="text-[#F6083A] text-center md:text-left">2024 - 2025</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10">
            {tac.map((card) => (
              <Card key={card.id} card={card} />
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="">
          <h1 className="text-3xl font-bold text-center md:text-left mb-4">Education Quality</h1>
          <p className="text-[#F6083A] text-center md:text-left">2020 - 2024</p>

          {/* Diploma Section */}
          <div className='lg:flex gap-4 items-center'>
          <motion.div 
          variants={fadeIn('right', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false,amount: 0.7}}
          className="my-4 shadow-lg p-6 rounded-xl bg-[#111827] border text-gray-200">
            <h2 className="text-xl font-bold mb-2">Diploma in Computer Science & Technology</h2>
            <p className="font-semibold">Tangail Polytechnic Institute</p>
            <p className="text-sm mb-2">(2020 - 2024)</p>
            <p className="text-sm">CGPA: 3.53 / 4.00</p>
            <p className="mt-3">
              A Diploma in Computer Science & Technology equips students with essential skills in programming, software development, networking, and IT infrastructure, providing a strong foundation for a successful career in tech industries.
            </p>
          </motion.div>

          {/* Skill Development Section */}
          <motion.div 
          variants={fadeIn('left', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false,amount: 0.7}}
          className="my-4  shadow-lg p-8 rounded-xl bg-[#111827] border text-gray-200">
            <h2 className="text-2xl font-bold mb-2">Skill Development</h2>
            <p className="font-semibold text-xl">Programming Hero Course</p>
            <p className="text-sm mb-2">(6 months)</p>
            <p className='mt-3'>
              Programming Hero offers an interactive course designed to teach coding through fun challenges, projects, and a hands-on approach, suitable for beginners.
            </p>
          </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
