import './styles.css'

import styled from 'styled-components/macro'

import { LightGreyCard } from '../../components/Card'
import { SupportedChainId } from '../../constants/chains'
import useActiveWeb3React from '../../hooks/useActiveWeb3React'
import Buyback from './Buyback'
//import ClaimTransaction from './ClaimTransaction'
import NFTtable from './NFT'
import UserTokenBalance from './UserTokenBalance'

export default function DashBoardComponent() {
  const { account, chainId } = useActiveWeb3React()
  const showConnectAWallet = Boolean(!account)
  //const propernetwork = Boolean(!chainId)
  const isNotOnMainnet = Boolean(chainId && chainId !== SupportedChainId.RINKEBY)

  const StyledText = styled.text`
    font-size: 20px;
    text-color: #ffffff;
  `
  if (isNotOnMainnet) {
    return (
      <LightGreyCard
        style={{
          fontSize: '20px',
          fontWeight: 'bold',
          textAlign: 'center',
          backgroundColor: '#fff700',
          maxWidth: '800px',
        }}
      >
        {' '}
        <StyledText style={{ justifyContent: 'center' }}> Please Connect to Ethereum Mainnet</StyledText>{' '}
      </LightGreyCard>
    )
  } else {
    if (showConnectAWallet) {
      return (
        <LightGreyCard
          style={{
            fontSize: '20px',
            fontWeight: 'bold',
            textAlign: 'center',
            backgroundColor: '#fff700',
            maxWidth: '800px',
          }}
        >
          {' '}
          <StyledText style={{ justifyContent: 'center' }}> Connect a wallet to continue </StyledText>{' '}
        </LightGreyCard>
      )
    } else {
      return (
        <>
          <div className="animate__animated animate__fadeInDown"></div>
          <div className={'flexbox-vertical-container'}>
            <UserTokenBalance></UserTokenBalance>
            <p></p>
            <p></p>

            <div className={'blacktext'}>
              <NFTtable></NFTtable>

              <Buyback></Buyback>
            </div>
          </div>
        </>
      )
    }
  }
}
