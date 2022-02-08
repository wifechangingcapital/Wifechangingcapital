import { LoadingOutlined } from '@ant-design/icons'
//import { BigNumber } from '@ethersproject/bignumber'
import { Contract } from '@ethersproject/contracts'
import { getNetwork, Web3Provider } from '@ethersproject/providers'
//import Decimal from 'decimal.js'
//import { formatEther } from '@ethersproject/units'
//import { Button } from '@material-ui/core'
import { useWeb3React } from '@web3-react/core'
import { Spin } from 'antd'
import { GreyCard } from 'components/Card'
import { RowBetween } from 'components/Row'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import React, { useCallback, useState } from 'react'
import styled from 'styled-components/macro'
//import getLibrary from 'utils/getLibrary'

//import Contract from './artifacts/contracts/Greeter.sol/Greeter.json'
//const ethers = require('ethers')

// left: 600px;
// bottom: 40px;
const ClaimButton = styled.button`
  position: relative;
  display: block;
  padding: 10px 40px;
  border-radius: 8px;
  background-color: #2bff00;
`
// left: 600px;
//top: 50px;
const DonateButton = styled.button`
  position: relative;
  display: block;
  padding: 10px 3px;
  border-radius: 8px;
  background-color: #1eb300;
`
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

const ClaimTransaction = () => {
  const [loading, setLoading] = useState(false)
  const { account, chainId } = useActiveWeb3React()
  //here I am unsure If I just use the chainid read from the wallet if that will suffice for a provider, I believe so
  const showConnectAWallet = Boolean(!account)
  const chainInfo = 1
  const network = getNetwork(chainInfo)
  const context = useWeb3React()
  const { library } = context
  const provider = new Web3Provider(library.provider)
  //const provider = getDefaultProvider(network)
  //const library = getLibrary(provider)
  const signer = provider.getSigner()

  const handleClaim = useCallback(async () => {
    if (showConnectAWallet) {
      console.log({ message: 'Hold On there Partner, there seems to be an Account err!' })
      return
    }

    try {
      setLoading(true)
      const response = await fetch(
        'https://api.etherscan.io/api?module=contract&action=getabi&address=0x83e9f223e1edb3486f876ee888d76bfba26c475a&apikey=432BW4Y2JX817J6CJAWGHAFTXQNFVXRU2Q'
      ) //ClientTokenABIneeded
      const data = await response.json()
      const abi = data.result
      console.log(abi)

      //const provider = new EtherscanProvider(network, '432BW4Y2JX817J6CJAWGHAFTXQNFVXRU2Q')
      const contractaddress = '0x83e9f223e1edb3486f876ee888d76bfba26c475a' // "clienttokenaddress"
      const contract = new Contract(contractaddress, abi, signer)
      const ClaimBalance = await contract.approve(account, 1) //.claim(account,amount)
      const Claimtxid = await ClaimBalance
      console.log({ message: `https://explorer.solana.com/tx/${Claimtxid}` })

      return Claimtxid
      /////
    } catch (error) {
      console.log(error)
      setLoading(false)
    } finally {
      setLoading(false)
    }
  }, [showConnectAWallet, account, signer])

  return (
    <>
      <GreyCard
        style={{
          fontSize: '12x',
          backgroundColor: '#ff0000',
        }}
      >
        {' '}
        USDC Dashboard
        <DonateButton>Donate to Charity</DonateButton>
        <RowBetween></RowBetween>
        <ClaimButton
          color="secondary"
          //variant="outlined"
          //size="large"
          // fullWidth
          disabled={!account || loading}
          onClick={handleClaim}
        >
          {loading ? <Spin indicator={antIcon} className="add-spinner" /> : 'Claim'}
        </ClaimButton>
      </GreyCard>
    </>
  )
}

export default ClaimTransaction
