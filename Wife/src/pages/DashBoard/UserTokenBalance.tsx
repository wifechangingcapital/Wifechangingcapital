import './styles.css'
import 'animate.css'

//import { LoadingOutlined } from '@ant-design/icons'
import { Contract } from '@ethersproject/contracts'
import { Web3Provider } from '@ethersproject/providers'
import { formatEther } from '@ethersproject/units'
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
  const [claimableBalance, setclaimableBalance] = useState(Number)

  const [AnimePrice, setAnimePrice] = useState(Number)
  const [EthPrice, setEthPrice] = useState(Number)
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
          'https://api-rinkeby.etherscan.io/api?module=contract&action=getabi&address=0x8A2b5F4308d896feCe6be7ce4Ec304Bd1d1DfE63&apikey=432BW4Y2JX817J6CJAWGHAFTXQNFVXRU2Q'
        )

        const data = await response.json()
        const abi = data.result
        console.log(abi)
        const contractaddress = '0x8A2b5F4308d896feCe6be7ce4Ec304Bd1d1DfE63'
        const contract = new Contract(contractaddress, abi, provider)
        const UserTokenBalance = await contract.balanceOf(account)
        const FinalResult = await UserTokenBalance.toString()
        console.log(FinalResult)
        return FinalResult
      } catch (error) {
        console.log(error)
      } finally {
      }
    }
    async function FetchRawPrice() {
      if (showConnectAWallet) {
        console.log({ message: 'Hold On there Partner, there seems to be an Account err!' })
        return
      }

      try {
        // setLoading(true)
        const provider = new Web3Provider(library.provider)
        const response = await fetch(
          'https://api-rinkeby.etherscan.io/api?module=contract&action=getabi&address=0xEC33992fd60A350500c543b3B0E1D90fDCaFb10a&apikey=432BW4Y2JX817J6CJAWGHAFTXQNFVXRU2Q'
        ) // Api Key also the pair contract

        const data = await response.json()
        const abi = data.result
        console.log(abi)
        const contractaddress = '0xEC33992fd60A350500c543b3B0E1D90fDCaFb10a' // need uniswapv2pair
        const contract = new Contract(contractaddress, abi, provider)
        const Price = await contract.price0CumulativeLast()
        const JpegPrice = await Price
        const DisplayJpegPrice = JpegPrice.toString()
        console.log(DisplayJpegPrice)
        return DisplayJpegPrice
      } catch (error) {
        console.log(error)
        //setLoading(false)
      } finally {
        // setLoading(false)
      }
    }
    async function FetchClaimBalance() {
      if (showConnectAWallet) {
        return
      }

      try {
        //setLoading(true)
        const provider = new Web3Provider(library.provider)
        const response = await fetch(
          'https://api-rinkeby.etherscan.io/api?module=contract&action=getabi&address=0x8A2b5F4308d896feCe6be7ce4Ec304Bd1d1DfE63&apikey=432BW4Y2JX817J6CJAWGHAFTXQNFVXRU2Q'
        )

        const data = await response.json()
        const abi = data.result
        console.log(abi)
        const contractaddress = '0x8A2b5F4308d896feCe6be7ce4Ec304Bd1d1DfE63'
        const contract = new Contract(contractaddress, abi, provider)
        const UserClaimBalance = await contract.balanceOf(account)
        const test = UserClaimBalance
        const test0 = UserClaimBalance.toString()
        console.log(test)
        return test0
      } catch (error) {
        console.log(error)
        // setLoading(false)
      } finally {
        // setLoading(false)
      }
    }
    async function FetchEthPrice() {
      if (showConnectAWallet) {
        return
      }

      try {
        //setLoading(true)
        const response = await fetch(
          'https://api.etherscan.io/api?module=stats&action=ethprice&apikey=432BW4Y2JX817J6CJAWGHAFTXQNFVXRU2Q'
        ) // Api Key

        const data = await response.json()
        const ethprice = data.ethusd
        const ethPrice = await ethprice
        const DisplayethPrice = ethPrice
        console.log(DisplayethPrice)
        return DisplayethPrice
      } catch (error) {
        console.log(error)
      } finally {
      }
    }

    FetchEthPrice().then((result) => setEthPrice(result))

    FetchClaimBalance()
      .then((result) => formatEther(result))
      .then((result) => JSON.parse(result))
      .then((result) => result.toFixed(2))
      .then((result) => setclaimableBalance(result))

    FetchRawPrice()
      .then((result) => formatEther(result))
      .then((result) => JSON.parse(result))
      .then((result) => result.toFixed(3))
      .then((result) => setAnimePrice(result))

    FetchBalance()
      .then((result) => formatEther(result))
      .then((result) => parseInt(result))
      .then((result) => setuserBalance(result))
  }, [account, showConnectAWallet, library.provider])

  const AnimePriceInUsd = AnimePrice / EthPrice
  return (
    <>
      <div className={'animate__animated animate__backInRight'}>
        <div className={'darktext'}>
          <div className={'flexbox-vertical-container'}>
            <StyledImg
              style={{ paddingBottom: 10, alignItems: 'center', marginLeft: 100 }}
              src={DashWCC}
              height={200}
              width={400}
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
                  NFTs purchased {''} {claimableBalance}
                </Styledtext>
              </DarkCard>
              <DarkCard
                style={{
                  maxWidth: '800px',
                  marginBottom: '20px',
                }}
              >
                <Styledtext style={{ justifyContent: 'right', textAlign: 'right' }}>
                  Project Total invested ${claimableBalance * AnimePriceInUsd} {''} {userBalance}
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
                  Your Token Balance Value ${''} {userBalance * AnimePriceInUsd}
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
