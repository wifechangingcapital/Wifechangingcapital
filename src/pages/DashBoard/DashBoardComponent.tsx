import './styles.css'

import { SupportedChainId } from 'constants/chains'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import styled from 'styled-components/macro'

import { DarkCard } from '../../components/Card'
import BuybackTable from './BuyBack'
//import NFTtable from './NFT'
//import ClaimTransaction from './ClaimTransaction'
import UserTokenBalance from './UserTokenBalance'
//import UserTokenStats from './Userstats'
//import CompanyMetrics from "../../components/CompanyMetrics"
export default function DashBoardComponent() {
  const { account, chainId } = useActiveWeb3React()
  const showConnectAWallet = Boolean(!account)
  //const propernetwork = Boolean(!chainId)
  const isNotOnMainnet = Boolean(chainId && chainId !== SupportedChainId.MAINNET)
  const StyledText = styled.text`
    font-size: 20px;
    text-color: #ffffff;
  `
  if (isNotOnMainnet) {
    return (
      <DarkCard
        style={{
          fontSize: '20px',
          fontWeight: 'bold',
          textAlign: 'center',
          maxWidth: '800px',
        }}
      >
        {' '}
        <div className={'darktext'}>
          <StyledText style={{ justifyContent: 'center' }}> Please Connect to Ethereum Mainnet</StyledText>{' '}
        </div>
      </DarkCard>
    )
  } else {
    if (showConnectAWallet) {
      return (
        <DarkCard
          style={{
            fontSize: '20px',
            fontWeight: 'bold',
            textAlign: 'center',
            maxWidth: '800px',
          }}
        >
          {' '}
          <div className={'darktext'}>
            <StyledText style={{ justifyContent: 'center' }}> Connect a wallet to continue </StyledText>{' '}
          </div>
        </DarkCard>
      )
    } else {
      return (
        <>
          <video id="background-video" loop autoPlay>
            <source src="http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4" type="video/mp4" />
            <source src="http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4" type="video/ogg" />
            Your browser does not support the video tag.
          </video>
          <div className={'flexbox-vertical-container'}>
            <UserTokenBalance></UserTokenBalance>
            <p></p>
            <BuybackTable></BuybackTable>
          </div>
        </>
      )
    }
  }
}
