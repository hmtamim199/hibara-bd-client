import React from 'react';

const SectionTitle = ({subeading, heading}) => {
  return (
    <div className='mx-auto my-16 border-y-4 text-center'>
      <p className='text-yellow-600 '>---{subeading}---</p>
      <h3 className='text-3xl uppercase '>{heading}</h3>
    </div>
  );
};

export default SectionTitle;