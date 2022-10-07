import Link from 'next/link';
import { ConnectButton } from '@web3uikit/web3';

export default function Header(): JSX.Element {
  return (
    <nav className='flex flex-row border-b-2 p-4'>
      <h1 className='bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text px-5 text-xl text-transparent'>
        Liquid Loan
      </h1>
      <div className='absolute top-0 right-10 flex flex-row items-center justify-between'>
        <Link href='/'>
          <a className='mr-3 p-6'>Home</a>
        </Link>
        <ConnectButton moralisAuth={false} />
      </div>
    </nav>
  );
}
