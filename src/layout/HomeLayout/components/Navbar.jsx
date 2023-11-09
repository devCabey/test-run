import React from 'react';
import Logo from './Logo';
import Search from '../../../components/Search';
import Profile from './Profile';

const Navbar = () => {
  return (
    <div className='w-full z-30 h-full bg-white border-b flex items-center justify-between px-5'>
      <Logo />
      <Search sx='w-[500px] h-10 rounded-xl ' />
      <Profile />
    </div>
  );
};

export default Navbar;
