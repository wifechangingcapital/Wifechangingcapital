//import { Trans } from '@lingui/macro'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import styled from 'styled-components/macro'

import { DarkCard, GreyCard } from '../../components/Card'
import ClaimTransaction from './ClaimTransaction'
import Funcalculations from './FunCalculations'
//import UserTokenBalance from './UserTokenBalance'
//import ClaimTransaction from './ClaimTransaction'
import UserTokenBalance from './UserTokenBalance'

export default function DashBoardComponent() {
  const { account, chainId } = useActiveWeb3React()
  const showConnectAWallet = Boolean(!account)

  const Newinput = styled.input`
    border: 3px solid;
    border-radius: 5px;
    font-size: 12px;
    text-color: #ffffff;
    margin: 0.25rem;
    min-width: 175px;
    padding: 0.5rem;
    transition: border-color 0.5s ease-out;
    background: #ff3333;
  `
  const StyledText = styled.text`
    border: 3px solid;
    border-radius: 5px;
    font-size: 12px;
    text-color: #ffffff;
    testalign: 'left';
  `
  if (!showConnectAWallet) {
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
        Welcome Friend to your Reflections DashBoard
        <ClaimTransaction></ClaimTransaction>
        <p> </p>
        <UserTokenBalance></UserTokenBalance>
        <p></p>
        <Funcalculations></Funcalculations>
      </DarkCard>
    )
  } else {
    return <GreyCard> Connect a wallet to continue </GreyCard>
  }
}
