import React from 'react';
import SideNavLink from './SideNavLink';
import { TbPentagon, TbUsers } from 'react-icons/tb';
import { BsBoxSeam, BsHandbag, BsBank } from 'react-icons/bs';
import {
  MdLocalGasStation,
  MdOutlineRouter,
  MdOutlineSubscriptions,
  MdOutlinePayment,
  MdPayments,
} from 'react-icons/md';

const SideNav = () => {
  return (
    <div className='w-full h-full bg-blue-700 pr-2 flex flex-col justify-start items-start gap-3 py-5 '>
      <SideNavLink title='Dashboard' Icon={TbPentagon} active='Dashboard' />
      <SideNavLink title='Depots' Icon={BsBoxSeam} active='Dashboard' />
      <SideNavLink
        title='Stations'
        Icon={MdLocalGasStation}
        active='Dashboard'
      />
      <SideNavLink
        title='Fleet Management'
        Icon={MdPayments}
        active='Dashboard'
      />
      <SideNavLink title='Dealer' Icon={TbUsers} active='Dashboard' />
      <SideNavLink
        title='Telematics'
        Icon={MdOutlineRouter}
        active='Dashboard'
      />
      <SideNavLink title='Orders' Icon={BsHandbag} active='Dashboard' />
      <SideNavLink title='Banking' Icon={BsBank} active='Dashboard' />
      <SideNavLink
        title='Payroll & Payments'
        Icon={MdOutlinePayment}
        active='Dashboard'
      />
      <SideNavLink
        title='Subscription'
        Icon={MdOutlineSubscriptions}
        active='Dashboard'
      />
    </div>
  );
};

export default SideNav;
