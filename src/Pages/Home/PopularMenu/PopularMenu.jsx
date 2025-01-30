import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const PopularMenu = () => {

  const [menu, setMenu] = useState('');

  useEffect( () => {
    fetch('menu.json')
    .then( res => res.json())
    .then( data => {
      const popularItems = data.filter( item = item.category === 'popular')
      setMenu(popularItems)})
  },[])
  return (
    <div>
      <SectionTitle
      subeading="from our collection"
      heading=""
      ></SectionTitle>

      {
        
      }
    </div>
  );
};

export default PopularMenu;