import React from 'react';

const Card = ({card}) => {
const {name, image} = card
    return (
        <div className='w-32 text-center '>
            <img className=' mx-auto  opacity-80 rounded-3xl  p-1 h-20' src={image} alt="" />
            <h1 className='text-lg  my-2'>{name}</h1>
        </div>
    );
};

export default Card;