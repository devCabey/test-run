import React from 'react';
import Navbar from './components/Navbar';
import SideNav from './components/SideNav';
import { Outlet } from 'react-router-dom';

export const HomeLayout = () => {
  return (
    <div className='relative w-screen'>
      <div className='w-full h-14 fixed top-0 z-30'>
        <Navbar />
      </div>

      <div className='w-full flex justify-between relative '>
        <div className='w-72 z-20 h-screen sticky top-0 pt-14'>
          <SideNav />
        </div>

        <div className='w-full flex-1 pt-14'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
