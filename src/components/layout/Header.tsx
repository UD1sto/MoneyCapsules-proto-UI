import * as React from 'react';

import ButtonLink from '@/components/links/ButtonLink';
import UnstyledLink from '@/components/links/UnstyledLink';

import Discord from '~/svg/Discord.svg';
import Logo from '~/svg/Logo.svg';

// const links = [
//   { href: '/', label: 'Docs' },
//   { href: '/', label: 'About' },
// ];

export default function Header() {
  return (
    <header className='z-50'>
      <div className='layout flex h-20 items-center justify-between'>
        <UnstyledLink
          href='/'
          className='rounded-full bg-white p-3 font-bold hover:text-gray-600'
        >
          <Logo width={32} height={32} />
        </UnstyledLink>
        <div className='flex items-center justify-between gap-8'>
          {/* <nav>
            <ul className='flex items-center justify-between space-x-6'>
              {links.map(({ href, label }) => (
                <li key={`${href}${label}`}>
                  <UnstyledLink
                    href={href}
                    className='font-semibold text-white'
                  >
                    {label}
                  </UnstyledLink>
                </li>
              ))}
            </ul>
          </nav> */}

          {process.env.NEXT_PUBLIC_PRE_RELEASE !== 'true' && (
            <ButtonLink
              className='rounded-full border-white text-white hover:text-primary-500'
              variant='outline'
              href='https://saddle-frontend-nine.vercel.app/'
            >
              Launch App
            </ButtonLink>
          )}
          {process.env.NEXT_PUBLIC_PRE_RELEASE === 'true' && (
            <ButtonLink
              className='inline-flex gap-2 rounded-full border-white text-white hover:text-primary-500'
              variant='outline'
              href='https://discord.gg/tZHdEPP5'
            >
              <span>Join us</span>{' '}
              <Discord width={20} height={20} fill='currentColor' />
            </ButtonLink>
          )}
        </div>
      </div>
    </header>
  );
}
