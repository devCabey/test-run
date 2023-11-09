import React from 'react';
import TableAction from './TableAction';

const TableData = () => {
  return (
    <tr className='border-b text-gray-500'>
      <td colSpan={1} className='text-center px-2 py-3'>
        <input type='checkbox' />
      </td>
      <td colSpan={2} className='text-left px-2  py-3'>
        Paul Location X
      </td>
      <td colSpan={2} className='text-left px-2  py-3'>
        Gasoline, Diesel, Premium
      </td>
      <td colSpan={2} className='text-left px-2  py-3'>
        Accepted
      </td>
      <td colSpan={2} className='text-left px-2  py-3'>
        $56,787.00
      </td>
      <td colSpan={2} className='text-left px-2  py-3'>
        Accra, Ghana
      </td>
      <td colSpan={2} className=''>
        <TableAction />
      </td>
    </tr>
  );
};

export default TableData;
