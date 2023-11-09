import React from 'react';

const TableHead = () => {
  return (
    <tr className='w-full bg-gray-100 h-14 font-normal px-2'>
      <th colSpan={1} className='text-center px-2'></th>
      <th colSpan={2} className='text-left px-2'>
        Name
      </th>
      <th colSpan={2} className='text-left px-2'>
        Fuel Type
      </th>
      <th colSpan={2} className='text-left px-2'>
        Status
      </th>
      <th colSpan={2} className='text-left px-2'>
        Stocks
      </th>
      <th colSpan={2} className='text-left px-2'>
        Location
      </th>
      <th colSpan={2} className='text-left px-2'>
        Actions
      </th>
    </tr>
  );
};

export default TableHead;
