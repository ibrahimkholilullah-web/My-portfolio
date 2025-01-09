import React, { useEffect, useState } from 'react';
import Shared from '../../Shared/Shared';
import Card from './Card';

const Education = () => {
    const [tac, settec] = useState([])
      useEffect(()=>{
        fetch('/tachnology.json')
        .then(res => res.json())
        .then(data => {
            settec(data)
        })
      },[])
    return (
       <div className='w-11/12 mx-auto'>
        <div>
         <Shared
         title='years of education'
         headline='My Resume'
         ></Shared>
        </div>
         <div className='md:flex justify-center items-center gap-10  my-20'>
            <div className='md:w-1/2 my-8 border-r-2 border-white '>
                <h1 className='text-3xl text-center md:text-left  font-bold'> My Skills</h1>
                <p className='text-[#F6083A] text-center md:text-left'>2024 - 2025</p>
            <div className=' my-10 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {
                    tac.map(card => <Card key={card.id} card={card}></Card>)
                }
            </div>
            </div>
            <div className='md:w-1/2'>
            <div>
            <h1 className='text-3xl  font-bold text-center md:text-left'> Education Quality</h1>
            <p className='text-[#F6083A] text-center md:text-left'>2020 - 2024</p>
            <div className='my-4 shadow-2xl shadow-black p-6 rounded-xl text-[#AFB3CA]'>
                <h1 className='md:text-2xl text-lg font-bold my-2'>Diploma in Computer Science & Technology.</h1>
                <p className='md:text-xl font-bold my-2'>Tangail Polytechnic Institute</p>
                <p className='text-sm '>(2020 - 2024)</p>
                <p className='text-sm mt-2'>CGPA : 3.53 - 4.00 Out Of</p>
                <p className='my-3'>"A Diploma in Computer Science & Technology equips students with essential skills in programming, software development, networking, and IT infrastructure, providing a strong foundation for a successful career in tech industries."</p>
            </div>
            <div className='my-4 shadow-2xl shadow-black p-6 rounded-xl text-[#AFB3CA]'>
                <h1 className='md:text-2xl text-lg font-bold my-2'>Skill development.</h1>
                <p className='md:text-xl font-bold my-2'>Programming Hero Course</p>
                <p className='text-sm '>(6 months)</p>
                <p className='my-3'>"Programming Hero offers an interactive course designed to teach coding through fun challenges, projects, and a hands-on approach, suitable for beginners."</p>
            </div>
            </div>
            </div>
        </div>
       </div>
    );
};

export default Education;