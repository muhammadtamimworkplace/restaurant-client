import React from 'react';

const SectionTitle = ({ SubHeading, Heading }) => {
    return (
        <div className='md:size-4/12 my-6 mb-10 mx-auto'>
            <p className='text-yellow-500 md:text-2xl'>--- {SubHeading} ---</p>
            <h2 className='md:text-6xl	mt-2 border-y-4 py-4 text-pink-600		'>{Heading}</h2>
        </div>
    );
};

export default SectionTitle;