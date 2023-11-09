import React from 'react';

const SideNavLink = ({ title, Icon, active }) => {
  return (
    <div
      className={`w-full flex whitespace-nowrap items-center justify-start px-5  py-2 rounded-r-md text-white text-sm gap-2  ${
        title === active
          ? 'bg-[#ccd9fc] text-blue-800 font-medium '
          : 'font-light'
      }`}>
      <Icon className='h-5 w-5' />
      {title}
    </div>
  );
};

export default SideNavLink;
