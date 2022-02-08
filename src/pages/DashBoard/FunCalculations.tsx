import { LoadingOutlined } from '@ant-design/icons'
import { Contract } from '@ethersproject/contracts'
import { Web3Provider } from '@ethersproject/providers'
import { formatEther } from '@ethersproject/units'
import { useWeb3React } from '@web3-react/core'
import { Spin } from 'antd'
import { GreyCard } from 'components/Card'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import React, { useEffect, useState } from 'react'

//import Contract from './artifacts/contracts/Greeter.sol/Greeter.json'
//const ethers = require('ethers')

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

const Funcalculations = () => {
  const [loading, setLoading] = useState(false)
  const { account } = useActiveWeb3React()
  //here I am unsure If I just use the chainid read from the wallet if that will suffice for a provider, I believe so
  const showConnectAWallet = Boolean(!account)
  const [claimableBalance, setclaimableBalance] = useState(Number)
  const [PastClaims, setPastClaims] = useState(Number)
  const context = useWeb3React()
  const { library } = context
  //// put in if !chainid=1 return 'connect to mainnet eth' else return [

  useEffect(() => {
    async function FetchPastClaims() {
      if (showConnectAWallet) {
        console.log({ message: 'Hold On there Partner, there seems to be an Account err!' })
        return
      }

      try {
        setLoading(true)
        const provider = new Web3Provider(library.provider)
        const response = await fetch(
          'https://api.etherscan.io/api?module=contract&action=getabi&address=0x83e9f223e1edb3486f876ee888d76bfba26c475a&apikey=432BW4Y2JX817J6CJAWGHAFTXQNFVXRU2Q'
        )

        const data = await response.json()
        const abi = data.result
        console.log(abi)
        const contractaddress = '0x83e9f223e1edb3486f876ee888d76bfba26c475a'
        const contract = new Contract(contractaddress, abi, provider)
        const UserTokenBalance = await contract.balanceOf(account)
        const test = UserTokenBalance
        const test0 = await UserTokenBalance.toString()
        console.log(test0)
        return test0
      } catch (error) {
        console.log(error)
        setLoading(false)
      } finally {
        setLoading(false)
      }
    }
    async function FetchClaimBalance() {
      if (showConnectAWallet) {
        console.log({ message: 'Hold On there Partner, there seems to be an Account err!' })
        return
      }

      try {
        setLoading(true)
        const provider = new Web3Provider(library.provider)
        const response = await fetch(
          'https://api.etherscan.io/api?module=contract&action=getabi&address=0x83e9f223e1edb3486f876ee888d76bfba26c475a&apikey=432BW4Y2JX817J6CJAWGHAFTXQNFVXRU2Q'
        )

        const data = await response.json()
        const abi = data.result
        console.log(abi)
        const contractaddress = '0x83e9f223e1edb3486f876ee888d76bfba26c475a'
        const contract = new Contract(contractaddress, abi, provider)
        const UserClaimBalance = await contract.balanceOf(account)

        const test0 = await UserClaimBalance.toString()
        console.log(test0)
        return test0
      } catch (error) {
        console.log(error)
        setLoading(false)
      } finally {
        setLoading(false)
      }
    }
    FetchClaimBalance()
      .then((result) => formatEther(result))
      .then((result) => JSON.parse(result))
      .then((result) => result.toFixed(2))
      .then((result) => setclaimableBalance(result))

    FetchPastClaims()
      .then((result) => formatEther(result))
      //.then((result) => JSON.parse(result))
      .then((result) => parseInt(result))
      //.then((result) => result.toFixed(4))
      .then((result) => setPastClaims(result))
  }, [account, showConnectAWallet, library.provider])

  return (
    <>
      <GreyCard style={{ backgroundColor: '#ff0000', textAlign: 'left', boxShadow: '0 1px 5px 4px rgba(0, 0, 0, 1)' }}>
        Your Claimable Balance {claimableBalance}
        {loading ? <Spin indicator={antIcon} className="add-spinner" /> : ''}
        You have Earned {PastClaims * 1.4}
      </GreyCard>
      <p></p>
      <GreyCard style={{ backgroundColor: '#ff0000', textAlign: 'left', boxShadow: '0 1px 5px 4px rgba(0, 0, 0, 1)' }}>
        <p></p>
        You have Earned
        {PastClaims / 1.2} Happy Meals!
        <p></p>
        You have Earned
        {PastClaims / 0.1} Chicken Nuggets!
      </GreyCard>
    </>
  )
}

export default Funcalculations
//for sending a swap transaction that first send a fee to a company wallet you would
// do a button that on click runns that function that
//reads the amount of the transaction and makes a raw transactionthat sends bnb or eth to another wallet
// htne executes the other transaction, signed once
