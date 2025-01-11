import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const Main = () => {
  return (
    <div>
      <Outlet></Outlet>
      <Navbar></Navbar>
      <Footer></Footer>
    </div>
  );
};

export default Main;