import React from 'react';
import { FaRegBell, FaChevronDown } from 'react-icons/fa6';
import Person from '../../../asset/person.jpg';
const Profile = () => {
  return (
    <div className='flex-between text-gray-700 gap-3 h-full '>
      <FaRegBell className='h-5 w-5 cursor-default' />
      <div className='flex-between gap-1 cursor-default border-l h-full px-2 '>
        <div className='flex-between gap-1'>
          <img src={Person} alt='profile' className='h-7 w-7 rounded-full' />
          <h3 className='text-sm mx-1'>Fetty Rapcha</h3>
        </div>
        <FaChevronDown className='w-3 h-3' />
      </div>
    </div>
  );
};

export default Profile;
