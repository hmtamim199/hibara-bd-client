import React from 'react';

const SectionTitle = ({subeading, heading}) => {
  return (
    <div className='mx-auto text-center'>
      <p className='text-yellow-600 '>---{subeading}---</p>
      <h3 className='text-3xl uppercase border-y-4 py-16  '>{heading}</h3>
    </div>
  );
};

export default SectionTitle;