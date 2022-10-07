import * as React from 'react';

import styles from '../styles/Home.module.css';
import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';
import Button from '@/components/buttons/Button';
import UnstyledLink from '@/components/links/UnstyledLink';
import Seo from '@/components/Seo';
import Link from 'next/link';

import Discord from '~/svg/Discord.svg';
import Github from '~/svg/Github.svg';
import Medium from '~/svg/Medium.svg';
import Twitter from '~/svg/Twitter.svg';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  if (process.env.NEXT_PUBLIC_PRE_RELEASE === 'true') {
    return (
      <Layout>
        {/* <Seo templateTitle='Home' /> */}
        <Seo />

        <main className={`${styles.bgImg} -mt-20`}>
          <section>
            <div className='layout flex min-h-screen flex-col items-center justify-center text-center'>
              <div className='flex flex-col items-center gap-4 text-white'>
                <div className=' max-w-2xl rounded-full  bg-gradient-to-r from-[#6EE7B7] to-[#3B82F6]  p-1 text-2xl'>
                  <div className='flex items-center justify-center gap-2 p-1 text-xl font-bold text-[#3B82F6]'>
                    <span className='rounded-l-full bg-white py-3 pl-3 pr-2'>
                      Money
                    </span>
                    <span className='rounded-r-full bg-white py-3 pr-3 pl-2'>
                      Capsules
                    </span>
                  </div>
                </div>

                <Link href='liquid-loan'>
                  <div className='flex flex-wrap gap-2'>
                    <Button variant={'pill'}>Liquid Loan App</Button>
                  </div>
                </Link>
              </div>
            </div>
          </section>
        </main>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main className='-mt-20'>
        <section>
          <div className='layout flex min-h-screen flex-col items-center justify-center text-center'>
            <div className='flex flex-col items-center gap-4 text-white'>
              <h1 className='max-w-3xl text-4xl md:text-6xl'>
                Low Slippage Swaps for Every Corner of DeFi
              </h1>
              <p className='max-w-2xl text-base md:text-lg'>
                A starter for Next.js, Tailwind CSS, and TypeScript with
                Absolute Import, Seo, Link component, pre-configured with Husky{' '}
              </p>
              <p className='mt-2 flex flex-row gap-6 text-sm text-gray-700'>
                <ButtonLink
                  className='py-3 px-4 text-base'
                  variant='pill'
                  href='https://saddle-frontend-nine.vercel.app/'
                >
                  Get Started
                </ButtonLink>
                <ButtonLink
                  className='rounded-full border-white py-3 px-4 text-base text-white hover:text-primary-500'
                  variant='outline'
                  href='#learn-more'
                >
                  Learn More
                </ButtonLink>
              </p>
            </div>
          </div>
        </section>

        <section id='learn-more'>
          <div className='layout mt-10 mb-28 flex flex-col items-start justify-center gap-14 md:mt-16'>
            <div className='flex flex-col items-start gap-4 text-white'>
              <h2 className='max-w-3xl text-3xl md:text-5xl'>
                About Money Capsules
              </h2>
              <p className='max-w-xl text-lg'>
                A starter for Next.js, Tailwind CSS, and TypeScript with
                Absolute Import, Seo, Link component, pre-configured with Husky{' '}
              </p>
              <p className='mt-2 flex gap-6 text-sm text-gray-700'>
                <UnstyledLink className='text-2xl' href='#'>
                  <Github />
                </UnstyledLink>
                <UnstyledLink className='text-2xl' href='#'>
                  <Discord />
                </UnstyledLink>
                <UnstyledLink className='text-2xl' href='#'>
                  <Medium />
                </UnstyledLink>
                <UnstyledLink className='text-2xl' href='#'>
                  <Twitter />
                </UnstyledLink>
              </p>
            </div>
            <div className='flex flex-col items-start gap-4 text-white'>
              <h2 className='max-w-3xl text-3xl md:text-5xl'>
                About Saddle Finance
              </h2>
              <p className='max-w-xl text-lg'>
                A starter for Next.js, Tailwind CSS, and TypeScript with
                Absolute Import, Seo, Link component, pre-configured with Husky{' '}
              </p>
              <p className='mt-2 gap-6 border-white text-sm text-white'>
                <ArrowLink
                  className='flex items-center gap-3 text-base font-light'
                  as={UnstyledLink}
                  href='https://saddle.finance/'
                >
                  Know More
                </ArrowLink>
              </p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
