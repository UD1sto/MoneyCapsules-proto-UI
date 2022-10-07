import { Table } from '@web3uikit/core';
import Navbar from '@/components/layout/Navbar';
import Image from 'next/image';
import { useState } from 'react';
import { useMoralis } from 'react-moralis';
import Button from '@/components/buttons/Button';
import styles from '../styles/Home.module.css';

export default function Pools() {
  const [isLoading, setIsLoading] = useState(false);
  const { isWeb3Enabled, chainId } = useMoralis();

  return (
    <>
      <Navbar />
      <div>
        {isWeb3Enabled ? (
          <div>
            {parseInt(chainId!) === 80001 ? (
              !isLoading ? (
                <div className={`${styles.bgImg} p-8`}>
                  <div
                    className={`p-8 pt-6 text-3xl font-semibold text-gray-500`}
                  >
                    Pools
                  </div>
                  <Table
                    columnsConfig='60px 35px 2fr 1fr 1fr 200px'
                    data={[
                      [
                        <Image src={`/svg/usdc.svg`} width={40} height={40} />,
                        <Image src={`/svg/weth.svg`} width={40} height={40} />,
                        `USDC/ETH`,
                        `0.01 %`,
                        `600 LLUSD`,
                        <Button onClick={() => {}} variant='pill'>
                          Borrow
                        </Button>,
                      ],
                      [
                        <Image src={`/svg/usdc.svg`} width={40} height={40} />,
                        <Image src={`/svg/weth.svg`} width={40} height={40} />,
                        `USDC/ETH`,
                        `0.01 %`,
                        `600 LLUSD`,
                        <Button onClick={() => {}} variant='pill'>
                          Borrow
                        </Button>,
                      ],
                      [
                        <Image src={`/svg/usdc.svg`} width={40} height={40} />,
                        <Image src={`/svg/weth.svg`} width={40} height={40} />,
                        `USDC/ETH`,
                        `0.01 %`,
                        `600 LLUSD`,
                        <Button onClick={() => {}} variant='pill'>
                          Borrow
                        </Button>,
                      ],
                      [
                        <Image src={`/svg/usdc.svg`} width={40} height={40} />,
                        <Image src={`/svg/weth.svg`} width={40} height={40} />,
                        `USDC/ETH`,
                        `0.01 %`,
                        `600 LLUSD`,
                        <Button onClick={() => {}} variant='pill'>
                          Borrow
                        </Button>,
                      ],
                      [
                        <Image src={`/svg/usdc.svg`} width={40} height={40} />,
                        <Image src={`/svg/weth.svg`} width={40} height={40} />,
                        `USDC/ETH`,
                        `0.01 %`,
                        `600 LLUSD`,
                        <Button onClick={() => {}} variant='pill'>
                          Borrow
                        </Button>,
                      ],
                      [
                        <Image src={`/svg/usdc.svg`} width={40} height={40} />,
                        <Image src={`/svg/weth.svg`} width={40} height={40} />,
                        `USDC/ETH`,
                        `0.01 %`,
                        `600 LLUSD`,
                        <Button onClick={() => {}} variant='pill'>
                          Borrow
                        </Button>,
                      ],
                    ]}
                    header={[
                      '',
                      '',
                      <span>Pool</span>,
                      <span>Fee</span>,
                      <span>Available</span>,
                      '',
                    ]}
                    maxPages={1}
                    pageSize={8}
                    isLoading={false}
                  />
                  {/* <Borrow isVisible={showAddModal} onClose={() => setShowAddModal(false)} />
                   */}
                </div>
              ) : (
                <div>Loading....</div>
              )
            ) : (
              <div>Plz Connect to Mumbai testnet</div>
            )}
          </div>
        ) : (
          <div>Please Connect Your Wallet</div>
        )}
      </div>
    </>
  );
}
