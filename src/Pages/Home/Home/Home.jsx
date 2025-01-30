import React from 'react';
import Banner from './Banner/Banner';
import Cover from '../Cover/Cover';
import PopularMenu from '../PopularMenu/PopularMenu';

const Home = () => {
  return (
    <div>
      <Cover></Cover>
     <Banner></Banner>
     <PopularMenu></PopularMenu>
    </div>
  );
};

export default Home;