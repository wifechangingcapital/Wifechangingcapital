import { LoadingOutlined } from '@ant-design/icons'
import { Contract } from '@ethersproject/contracts'
import { Web3Provider } from '@ethersproject/providers'
import { formatEther } from '@ethersproject/units'
import { useWeb3React } from '@web3-react/core'
import { Spin } from 'antd'
import { GreyCard } from 'components/Card'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components/macro'
import { String } from 'typescript-string-operations'

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
const Styledtext = styled.text`
  font-size: 18px;
  text-color: #ffffff;
`
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

const UserTokenBalance = () => {
  const [loading, setLoading] = useState(false)
  const { account } = useActiveWeb3React()
  //here I am unsure If I just use the chainid read from the wallet if that will suffice for a provider, I believe so
  const showConnectAWallet = Boolean(!account)
  const [userBalance, setuserBalance] = useState(Number)
  const [claimableBalance, setclaimableBalance] = useState(String)
  const [ReferenceVolume, setReferenceVolume] = useState(Number)
  const context = useWeb3React()
  const { library } = context
  //// put in if !chainid=1 return 'connect to mainnet eth' else return [
  useEffect(() => {
    async function FetchBalance() {
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
        const FinalResult = await UserTokenBalance.toString()
        console.log(FinalResult)
        return FinalResult
      } catch (error) {
        console.log(error)
        setLoading(false)
      } finally {
        setLoading(false)
      }
    }
    async function FetchClaimBalance() {
      if (showConnectAWallet) {
        console.log({ message: 'Please connect an Account' })
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
        const test = UserClaimBalance
        const test0 = UserClaimBalance.toString()
        console.log(test)
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

    FetchBalance()
      .then((result) => formatEther(result))
      .then((result) => parseInt(result))
      .then((result) => setuserBalance(result))
  }, [account, showConnectAWallet, library.provider])

  return (
    <>
      <GreyCard style={{ backgroundColor: '#ff0000', boxShadow: '0 1px 5px 4px rgba(0, 0, 0, 1)' }}>
        <Styledtext style={{ justifyContent: 'right', textAlign: 'left', paddingRight: 250 }}>
          {' '}
          Your ClaimableUSDC {claimableBalance}
        </Styledtext>
        <Styledtext style={{ justifyContent: 'right', textAlign: 'right' }}>
          Your Token Balance {userBalance}
        </Styledtext>
      </GreyCard>
      <p></p>
      <GreyCard style={{ backgroundColor: '#ff0000', textAlign: 'left', boxShadow: '0 1px 5px 4px rgba(0, 0, 0, 1)' }}>
        Reference Volume{' '}
        <Newinput
          type="Number"
          placeholder="Sample Reference Volume"
          onChange={(e: any) => setReferenceVolume(e.target.value)}
        ></Newinput>{' '}
        <p></p>
        Your Potential Rewards {((userBalance / 10000) * ReferenceVolume * 0.2).toFixed(2)}
        {loading ? <Spin indicator={antIcon} className="add-spinner" /> : ''}
      </GreyCard>
    </>
  )
}

export default UserTokenBalance
//for sending a swap transaction that first send a fee to a company wallet you would
// do a button that on click runns that function that
//reads the amount of the transaction and makes a raw transactionthat sends bnb or eth to another wallet
// htne executes the other transaction, signed once
