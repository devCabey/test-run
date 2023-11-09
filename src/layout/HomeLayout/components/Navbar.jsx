import React from 'react';
import Logo from './Logo';
import Search from './Search';
import Profile from './Profile';

const Navbar = () => {
  return (
    <div className='w-full z-30 h-14 bg-white border-b flex items-center justify-between px-5'>
      <Logo />
      <Search />
      <Profile />
    </div>
  );
};

export default Navbar;
