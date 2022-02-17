import { LoadingOutlined } from '@ant-design/icons'
import { Contract } from '@ethersproject/contracts'
import { Web3Provider } from '@ethersproject/providers'
import { useWeb3React } from '@web3-react/core'
import { Spin } from 'antd'
import { GreyCard } from 'components/Card'
//import { RowBetween } from 'components/Row'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import React, { useCallback, useState } from 'react'
import styled from 'styled-components/macro'

const ClaimButton = styled.button`
  position: relative;
  right: 200px;
  bottom: 30px;
  padding: 10px 40px;
  border-radius: 25px;
  background-image: linear-gradient(45deg, rgb(255, 0, 0) 0%, rgb(255, 148, 0) 70%, rgb(255, 253, 43) 100%);
  box-shadow: rgb(0, 0, 0) 0px 0px 7px 1px;
  border: 0px groove rgb(28, 110, 164);
  font-family: Verdana, Geneva, sans-serif;
  font-size: 12px;
  font-weight: bold;
`
// left: 600px;
//top: 50px;
const DonateButton = styled.button`
  padding: 10px 4px;
  position: relative;
  left: 200px;
  top: 25px;
  border-radius: 25px;
  background-image: linear-gradient(45deg, rgb(255, 0, 0) 0%, rgb(255, 148, 0) 70%, rgb(255, 253, 43) 100%);
  box-shadow: rgb(0, 0, 0) 0px 0px 7px 1px;
  border: 0px groove rgb(28, 110, 164);
  font-family: Verdana, Geneva, sans-serif;
  font-size: 12px;
  font-weight: bold;
`
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

const ClaimTransaction = () => {
  const [loading, setLoading] = useState(false)
  const { account } = useActiveWeb3React()
  const showConnectAWallet = Boolean(!account)
  const context = useWeb3React()
  const { library } = context
  const provider = new Web3Provider(library.provider)
  const signer = provider.getSigner()

  const handleDonate = useCallback(async () => {
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
      const contractaddress = '0x83e9f223e1edb3486f876ee888d76bfba26c475a' // "clienttokenaddress"
      const contract = new Contract(contractaddress, abi, signer)
      const DonateBalance = await contract.approve(account, 1) //.claim(account,amount)
      const Donatetxid = await DonateBalance
      return Donatetxid
      /////
    } catch (error) {
      console.log(error)
      setLoading(false)
    } finally {
      setLoading(false)
    }
  }, [showConnectAWallet, account, signer])

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
          backgroundColor: '#f7140c',
          boxShadow: '0 0px 0px 4px rgba(0, 0, 0, 1)',
          borderRadius: '20px',
        }}
      >
        {' '}
        <DonateButton onClick={handleDonate}>Donate to Charity</DonateButton>
        <p></p>
        <ClaimButton color="secondary" disabled={!account || loading} onClick={handleClaim}>
          {loading ? <Spin indicator={antIcon} className="add-spinner" /> : 'Claim'}
        </ClaimButton>
      </GreyCard>
    </>
  )
}

export default ClaimTransaction
