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

import chickennuggets from '../../assets/images/chickennuggets.png'
import happymeal from '../../assets/images/happymeal.png'

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />
const StyledText = styled.text`
  text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.2);
  font-size: 18px;
  text-color: #ffffff;
  font-weight: bold;
  text-align: center;
  align-items: center;
  position: relative;
`
const StyledText2 = styled.text`
  text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.2);
  font-size: 18px;
  text-color: #ffffff;
  font-weight: bold;
  text-align: center;
  align-items: center;
  position: relative;
  bottom: 30px;
`
const StyledImg = styled.img`
  justify-content: 'right';
`
const Funcalculations = () => {
  const [loading, setLoading] = useState(false)
  const { account } = useActiveWeb3React()
  const showConnectAWallet = Boolean(!account)
  const [claimableBalance, setclaimableBalance] = useState(Number)
  const [projectTotal, setprojecttotal] = useState(Number)
  const [PastClaims, setPastClaims] = useState(Number)
  const context = useWeb3React()
  const { library } = context

  useEffect(() => {
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
        const UserClaimableBalance = await contract.balanceOf(account)
        const Claimable = await UserClaimableBalance.toString()
        return Claimable
      } catch (error) {
        console.log(error)
        setLoading(false)
      } finally {
        setLoading(false)
      }
    }
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
        const UserPastClaimBalance = await contract.balanceOf(account)

        const PastClaims = await UserPastClaimBalance.toString()
        return PastClaims
      } catch (error) {
        console.log(error)
        setLoading(false)
      } finally {
        setLoading(false)
      }
    }
    async function FetchProjectTotal() {
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
        const ProjectTotal = await contract.balanceOf(account)
        const projecttotal = await ProjectTotal.toString()
        return projecttotal
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
      .then((result) => parseInt(result))
      .then((result) => setPastClaims(result))

    FetchProjectTotal()
      .then((result) => formatEther(result))
      .then((result) => JSON.parse(result))
      .then((result) => result.toFixed(2))
      .then((result) => setprojecttotal(result))
  }, [account, showConnectAWallet, library.provider])

  return (
    <>
      <GreyCard
        style={{
          backgroundColor: '#f7140c',
          textAlign: 'left',
          maxWidth: '800px',
        }}
      >
        <StyledText style={{ justifyContent: 'left', textAlign: 'center', paddingRight: 75 }}>
          Your Current Claimable Balance {claimableBalance}
        </StyledText>
        {loading ? <Spin indicator={antIcon} className="add-spinner" /> : ''}
        <StyledText style={{ justifyContent: 'right', textAlign: 'center' }}>
          You have Earned in total ${PastClaims * 1.4}
        </StyledText>
      </GreyCard>
      <p></p>
      <GreyCard
        style={{
          textAlign: 'left',
          maxWidth: '800px',
        }}
      >
        <StyledText2 style={{ paddingRight: 120, paddingLeft: 10, paddingBottom: 50, position: 'relative' }}>
          You have Earned {''} {PastClaims / 1.2} {''} Happy Meals!
        </StyledText2>
        <StyledImg
          style={{ justifyContent: 'right' }}
          src={happymeal}
          height={75}
          width={150}
          alt="happymeal"
        ></StyledImg>
      </GreyCard>
      <p></p>
      <GreyCard
        style={{
          textAlign: 'left',
          maxWidth: '800px',
        }}
      >
        <StyledText2 style={{ paddingRight: 120, paddingLeft: 10, paddingBottom: 15 }}>
          <p></p>
          You have Earned {''} {PastClaims / 0.1} {''} Chicken Nuggets!{' '}
        </StyledText2>{' '}
        <StyledImg
          style={{ justifyContent: 'right', textAlign: 'center' }}
          src={chickennuggets}
          height={100}
          width={150}
          alt="chickennuggets"
        ></StyledImg>
      </GreyCard>
      <p></p>
      <GreyCard
        style={{
          textAlign: 'left',
          maxWidth: '800px',
        }}
      >
        {' '}
        <StyledText style={{ alignItems: 'center' }}>
          {' '}
          Total Rewards Claimed {''} {projectTotal}{' '}
        </StyledText>
      </GreyCard>
    </>
  )
}

export default Funcalculations
//for sending a swap transaction that first send a fee to a company wallet you would
// do a button that on click runns that function that
//reads the amount of the transaction and makes a raw transactionthat sends bnb or eth to another wallet
// htne executes the other transaction, signed once
