import './styles.css'
import 'animate.css'

//import { LoadingOutlined } from '@ant-design/icons'
import { Contract } from '@ethersproject/contracts'
import { Web3Provider } from '@ethersproject/providers'
import { formatEther, formatUnits } from '@ethersproject/units'
import { useWeb3React } from '@web3-react/core'
import { DarkCard } from 'components/Card'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components/macro'

import DashWCC from '../../assets/images/DashWCC.png'
const Styledtext = styled.text`
  text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.2);
  font-size: 18px;
  text-color: #ffffff;
  font-weight: bold;
`
const StyledImg = styled.img`
  justify-content: 'center';
  position: relative;
`
//const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

const UserTokenBalance = () => {
  //const [loading, setLoading] = useState(false)
  const { account } = useActiveWeb3React()
  const showConnectAWallet = Boolean(!account)
  const [userBalance, setuserBalance] = useState(Number)
  //const [claimableBalance, setclaimableBalance] = useState(Number)
  const [Reserve0, setReserve0] = useState(Number)
  const [Reserve1, setReserve1] = useState(Number)
  const context = useWeb3React()
  const { library } = context
  useEffect(() => {
    async function FetchBalance() {
      if (showConnectAWallet) {
        console.log({ message: 'Hold On there Partner, there seems to be an Account err!' })
        return
      }

      try {
        //setLoading(true)
        const provider = new Web3Provider(library.provider)
        const response = await fetch(
          'https://api.etherscan.io/api?module=contract&action=getabi&address=0xC6Ef330D0cf66FDFb61c2eB904e90E4e67E401Ec&apikey=432BW4Y2JX817J6CJAWGHAFTXQNFVXRU2Q'
        )

        const data = await response.json()
        const abi = data.result
        const contractaddress = '0xC6Ef330D0cf66FDFb61c2eB904e90E4e67E401Ec'
        const contract = new Contract(contractaddress, abi, provider)
        const UserTokenBalance = await contract.balanceOf(account)
        const FinalResult = await UserTokenBalance.toString()
        return FinalResult
      } catch (error) {
        console.log(error)
      } finally {
      }
    }
    async function FetchReserve0() {
      if (showConnectAWallet) {
        console.log({ message: 'Hold On there Partner, there seems to be an Account err!' })
        return
      }

      try {
        // setLoading(true)
        const provider = new Web3Provider(library.provider)
        const response = await fetch(
          'https://api.etherscan.io/api?module=contract&action=getabi&address=0x3ee197c0434ef9fcef00c7cf338858a85e551640&apikey=432BW4Y2JX817J6CJAWGHAFTXQNFVXRU2Q'
        ) // Api Key also the pair contract

        const data = await response.json()
        const abi = data.result
        const contractaddress = '0x3ee197c0434ef9fcef00c7cf338858a85e551640' // need uniswapv2pair
        const contract = new Contract(contractaddress, abi, provider)
        const Price = await contract.getReserves()
        const Reserve0 = await Price._reserve0
        const DisplayReserve0 = Reserve0.toString()
        console.log(DisplayReserve0)
        return DisplayReserve0
      } catch (error) {
        console.log(error)
        //setLoading(false)
      } finally {
        // setLoading(false)
      }
    }
    async function FetchReserve1() {
      if (showConnectAWallet) {
        console.log({ message: 'Hold On there Partner, there seems to be an Account err!' })
        return
      }

      try {
        // setLoading(true)
        const provider = new Web3Provider(library.provider)
        const response = await fetch(
          'https://api.etherscan.io/api?module=contract&action=getabi&address=0x3ee197c0434ef9fcef00c7cf338858a85e551640&apikey=432BW4Y2JX817J6CJAWGHAFTXQNFVXRU2Q'
        ) // Api Key also the pair contract

        const data = await response.json()
        const abi = data.result
        const contractaddress = '0x3ee197c0434ef9fcef00c7cf338858a85e551640' // need uniswapv2pair
        const contract = new Contract(contractaddress, abi, provider)
        const Price = await contract.getReserves()
        const Reserve1 = await Price._reserve1
        const Reserve1display = Reserve1.toString()
        return Reserve1display
      } catch (error) {
        console.log(error)
        //setLoading(false)
      } finally {
        // setLoading(false)
      }
    }

    FetchReserve1()
      .then((result) => formatUnits(result))
      .then((result) => JSON.parse(result))
      .then((result) => result.toFixed(3))
      .then((result) => setReserve1(result))

    FetchReserve0()
      .then((result) => JSON.parse(result))
      .then((result) => result.toFixed(3))
      .then((result) => setReserve0(result))

    FetchBalance()
      .then((result) => formatEther(result))
      .then((result) => JSON.parse(result))
      .then((result) => result.toFixed(3))
      .then((result) => setuserBalance(result))
  }, [account, showConnectAWallet, library.provider])

  const WifePrice = Reserve0 / Reserve1
  const WifePriceinUsd = WifePrice / 1000000

  //const wifeprice = WifePriceinUsd.toFixed(5)
  //const Reserve2price = Reserve2math * 1000000
  const YourBalanceValue = (WifePriceinUsd * userBalance).toFixed(2)

  return (
    <>
      <div className={'animate__animated animate__backInRight'}>
        <div className={'darktext'}>
          <div className={'flexbox-vertical-container'}>
            <StyledImg
              style={{ paddingBottom: 10, alignItems: 'center', marginLeft: 100, position: 'relative', left: 0 }}
              src={DashWCC}
              height={400}
              width={800}
              alt="header"
            ></StyledImg>
            <div className={'flexbox-container'}>
              <DarkCard
                style={{
                  maxWidth: '800px',
                  marginBottom: '20px',
                  marginRight: '20px',
                }}
              >
                <Styledtext style={{ justifyContent: 'right', textAlign: 'left', paddingRight: 250 }}>
                  {' '}
                  Your Token Balance Value {''} $ {YourBalanceValue}
                </Styledtext>
              </DarkCard>
              <DarkCard
                style={{
                  maxWidth: '800px',
                  marginBottom: '20px',
                }}
              >
                <Styledtext style={{ justifyContent: 'right', textAlign: 'right' }}>
                  Project Total BuyBacks {''} $11,265
                </Styledtext>
              </DarkCard>
            </div>
            <div className={'flexbox-container'}>
              <DarkCard
                style={{
                  maxWidth: '800px',
                  marginRight: '20px',
                }}
              >
                <Styledtext style={{ justifyContent: 'right', textAlign: 'right' }}>
                  Your Token Balance {''} {userBalance}
                </Styledtext>
              </DarkCard>
              <DarkCard>
                <Styledtext style={{ justifyContent: 'right', textAlign: 'right' }}>
                  Total Supply Burned {''} 3%
                </Styledtext>
              </DarkCard>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserTokenBalance
