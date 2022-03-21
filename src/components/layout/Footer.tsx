import * as React from 'react';

import UnstyledLink from '../links/UnstyledLink';

import Discord from '~/svg/Discord.svg';
import Logo from '~/svg/Logo.svg';

// const links = [
//   { href: '/', label: 'Docs' },
//   { href: '/', label: 'About' },
// ];

export default function Footer() {
  const isPreRelease = process.env.NEXT_PUBLIC_PRE_RELEASE === 'true';
  return (
    // <div style={{ background: '#142850' }} className='bg-slate-900'>
    <div
      className={
        isPreRelease
          ? 'absolute bottom-0 right-1/2 w-full translate-x-1/2 text-center'
          : undefined
      }
    >
      <footer className='layout my-8 flex items-center justify-center gap-4 text-white '>
        <div className='flex flex-col items-center justify-center gap-2'>
          <div className='flex items-center justify-center gap-3 font-sans text-lg '>
            <div className='rounded-full bg-white p-2'>
              <Logo width={20} height={20} />
            </div>
            <span>Money Capsules</span>
          </div>

          <p className='font-sans text-sm font-thin'>© All Rights Reserved</p>
        </div>
        <div className=' h-11 border-r border-white'></div>
        <p>
          <UnstyledLink className='text-2xl' href='https://discord.gg/tZHdEPP5'>
            <Discord />
          </UnstyledLink>
        </p>
      </footer>
    </div>
  );
}
