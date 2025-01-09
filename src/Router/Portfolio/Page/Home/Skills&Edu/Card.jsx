import React from 'react';

const Card = ({card}) => {
const {name, image} = card
    return (
        <div className=''>
            <img className='w-24 bg-slate-100 rounded-3xl border p-1 h-20 mx-auto' src={image} alt="" />
            <h1 className='text-lg text-center my-2'>{name}</h1>
        </div>
    );
};

export default Card;