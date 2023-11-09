import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

const OverviewCard = ({ title, value }) => {
  return (
    <div className='border h-44 w-72 rounded-lg bg-white px-5  flex flex-col '>
      <div className='border-b flex-1 py-3'>
        <h3 className='text-lg my-1'>{title}</h3>
        <h1 className='font-medium text-2xl'>{value}</h1>
      </div>
      <h3 className='flex items-center justify-start gap-2 h-12 text-sm'>
        View Details <FiArrowRight />
      </h3>
    </div>
  );
};

export default OverviewCard;
