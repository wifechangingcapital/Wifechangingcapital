import { LoadingOutlined } from '@ant-design/icons'
import { Contract } from '@ethersproject/contracts'
import { Web3Provider } from '@ethersproject/providers'
import { useWeb3React } from '@web3-react/core'
import { Row } from 'antd'
import { LightCard } from 'components/Card'
//import { RowBetween } from 'components/Row'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
//import useAddTokenToMetamask from 'hooks/useAddTokenToMetamask' - /////from transaction cofrimation modal index line 127
import React, { useCallback, useState } from 'react'
import styled from 'styled-components/macro'

const BuyButton = styled.button`
  color: rgb(255, 255, 255);
  font-size: 18px;
  padding: 8px 35px;
  border-radius: 0px;
  font-family: Georgia, serif;
  font-weight: normal;
  position: relative;
  left: 1150px;
  text-decoration: none;
  font-style: normal;
  font-variant: normal;
  background-image: linear-gradient(rgb(125, 125, 125) 0%, rgb(225, 225, 225) 100%, rgb(181, 181, 181) 100%);
  box-shadow: rgb(0, 0, 0) 1px 1px 5px 0px;
  border: 0px solid rgb(27, 164, 21);
  myButton:hover
    background: #7d7d7d;
  myButton:active 
    background: #b5b5b5;
`
const Styledtext = styled.text`
  text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.2);
  font-size: 22px;
  text-color: #000000;
  text-align: 'center';
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
  //const { addToken, success } = useAddTokenToMetamask(currencyToAdd)

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
      <LightCard>
        <Styledtext>Dashboard</Styledtext>
        <BuyButton>BUY $JPG</BuyButton>
      </LightCard>
      <Row></Row>
    </>
  )
}

export default ClaimTransaction
