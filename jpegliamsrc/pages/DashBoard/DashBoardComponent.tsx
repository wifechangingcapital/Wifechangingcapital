import { Col, Row } from 'antd'
import { SupportedChainId } from 'constants/chains'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import styled from 'styled-components/macro'

import { GreyCard } from '../../components/Card'
import Buyback from './Buyback'
import ClaimTransaction from './ClaimTransaction'
import CompanyMetrics from './Metrics'
import NFTtable from './NFT'
import UserTokenBalance from './UserTokenBalance'

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
      <GreyCard
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
      </GreyCard>
    )
  } else {
    if (showConnectAWallet) {
      return (
        <GreyCard
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
        </GreyCard>
      )
    } else {
      return (
        <>
          <ClaimTransaction></ClaimTransaction>
          <UserTokenBalance></UserTokenBalance>
          <Row>
            <Col span={12}>
              <CompanyMetrics></CompanyMetrics>
            </Col>
            <Col span={12}>
              <NFTtable></NFTtable>
            </Col>
          </Row>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <Buyback></Buyback>
        </>
      )
    }
  }
}
