import useActiveWeb3React from 'hooks/useActiveWeb3React'
import styled from 'styled-components/macro'

import { DarkCard } from '../../components/Card'
import ClaimTransaction from './ClaimTransaction'
import Funcalculations from './FunCalculations'
import UserTokenBalance from './UserTokenBalance'

export default function DashBoardComponent() {
  const { account, chainId } = useActiveWeb3React()
  const showConnectAWallet = Boolean(!account)
  const propernetwork = Boolean(!chainId)

  const StyledHeader = styled.text`
    font-size: 24px;
    text-color: #ffffff;
    font-weight: bold;
    font-family: Georgia-serif;
    align-items: 'center';
  `

  const StyledText = styled.text`
    font-size: 20px;
    text-color: #ffffff;
  `
  if (propernetwork) {
    return (
      <DarkCard
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
      </DarkCard>
    )
  } else {
    if (!showConnectAWallet) {
      return (
        <DarkCard
          style={{
            fontSize: '20px',
            fontWeight: 'bold',
            textAlign: 'center',
            backgroundColor: '#FFB300',
            maxWidth: '900px',
          }}
        >
          {' '}
          <StyledHeader style={{ paddingBottom: 40, paddingTop: 30 }}> MCDEGEN Reflections DashBoard </StyledHeader>
          <p></p>
          <ClaimTransaction></ClaimTransaction>
          <p> </p>
          <UserTokenBalance></UserTokenBalance>
          <p></p>
          <Funcalculations></Funcalculations>
        </DarkCard>
      )
    } else {
      return (
        <DarkCard>
          {' '}
          <StyledText style={{ justifyContent: 'center' }}> Connect a wallet to continue </StyledText>{' '}
        </DarkCard>
      )
    }
  }
}
