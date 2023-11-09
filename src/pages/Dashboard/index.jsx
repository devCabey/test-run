import React from 'react';
import OverviewCard from './components/OverviewCard';
import Search from '../../components/Search';
import OptionComponent from './components/OptionComponent';
import TableComponent from './components/Table';

export const Dashboard = () => {
  return (
    <div className='w-full px-5 pt-5'>
      <h1 className='text-2xl text-gray-500 font-medium mb-7'>Overview</h1>
      <div className=' w-full'>
        {/* top slide */}
        <div className='w-full flex items-center justify-between'>
          <OverviewCard title='Total Revenue' value='$39870.00' />
          <OverviewCard title='Fuel Station' value='120' />
          <OverviewCard title='Depot' value='50' />
          <OverviewCard title='Orders' value='60' />
        </div>
        {/* table */}
        <div className='w-full my-5 border bg-white rounded-md '>
          <div className='w-full  h-16 border-b  flex-between px-5 relative'>
            <Search sx='w-[350px] h-8 rounded-md' />
            <OptionComponent />
          </div>
          {/* table */}
          <div className='w-full'>
            <TableComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
