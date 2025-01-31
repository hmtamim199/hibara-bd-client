import React from 'react';

const MenuItem = ({item}) => {

  const {name, price, recipe, image} = item;
  return (
    <div className='flex space-x-9'>

      <img className='w-[100px]' src={image} alt="" />
      <div>
        <h3 className='uppercase'>{name}-----------</h3>
        <p>{recipe}</p>
      </div>
      <p className='text-yellow-500'>${price}</p>
      
    </div>
  );
};

export default MenuItem;