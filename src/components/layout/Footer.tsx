import * as React from 'react';

import Logo from '~/svg/Logo.svg';

// const links = [
//   { href: '/', label: 'Docs' },
//   { href: '/', label: 'About' },
// ];

export default function Footer() {
  return (
    // <div style={{ background: '#142850' }} className='bg-slate-900'>
    <div>
      <footer className='layout my-8 flex items-center justify-center text-white md:justify-end'>
        <div className='flex flex-col items-center justify-center gap-2'>
          <div className='flex items-center justify-center gap-4 font-sans text-lg '>
            <div className='rounded-full bg-white p-2'>
              <Logo width={20} height={20} />
            </div>
            <span>Money Capsules</span>
          </div>

          <p className='font-sans text-sm font-thin'>© All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}
