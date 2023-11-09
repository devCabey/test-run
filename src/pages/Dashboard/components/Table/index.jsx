import React from 'react';
import TableHead from './TableHead';
import TableData from './TableData';

export const TableComponent = () => {
  return (
    <table className='w-full'>
      <TableHead />
      <TableData />
      <TableData />
      <TableData />
      <TableData />
      <TableData />
      <TableData />
      <TableData />
    </table>
  );
};

export default TableComponent;
