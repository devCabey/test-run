import React from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';
import { BiSolidEdit } from 'react-icons/bi';

const TableAction = () => {
  return (
    <div className='flex-between gap-2 w-12'>
      <span className='p-2 bg-green-50 text-green-500 rounded-md cursor-pointer'>
        <BiSolidEdit />
      </span>
      <span className='p-2 bg-red-50 text-red-500 rounded-md cursor-pointer'>
        <RiDeleteBinLine />
      </span>
    </div>
  );
};

export default TableAction;
