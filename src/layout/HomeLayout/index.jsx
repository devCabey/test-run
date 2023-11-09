import React from 'react';
import Navbar from './components/Navbar';
import SideNav from './components/SideNav';
import { Outlet } from 'react-router-dom';

export const HomeLayout = () => {
  return (
    <div className='relative w-screen'>
      <div className='w-full sticky top-0 z-30'>
        <Navbar />
      </div>

      <div className='w-full flex justify-between relative'>
        <div className='w-72 h-screen z-20 sticky top-0'>
          <SideNav />
        </div>
        <div className='w-full flex-1'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
