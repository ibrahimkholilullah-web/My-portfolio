import React from 'react';

const Shared = ({title, headline}) => {
    return (
        <div className='mx-auto text-center mt-20'>
            <p className='text-[#F6083A]  uppercase '>{title}</p>
            <h3 className='md:text-5xl font-bold text-3xl my-3 border-b-2 border-t-2 md:w-96 py-2 mx-auto'>{headline}</h3>
        </div>
    );
};

export default Shared;