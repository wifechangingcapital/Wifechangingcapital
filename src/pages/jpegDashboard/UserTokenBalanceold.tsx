// eslint-disable-next-line no-restricted-imports
import './styles.css'
import 'animate.css'

import { Contract } from '@ethersproject/contracts'
import { Web3Provider } from '@ethersproject/providers'
import { formatEther } from '@ethersproject/units'
import useScrollPosition from '@react-hook/window-scroll'
import { useWeb3React } from '@web3-react/core'
import { LightGreyCard } from 'components/Card'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import React, { useEffect, useState } from 'react'
import { useTransition } from 'react-spring'
import styled from 'styled-components/macro'
import { String } from 'typescript-string-operations'

import mcdegenlogo from '../../assets/images/mcdegenlogo.png'
//import testvid from '../../assets/images/testvid.mp4'

const StyledImg = styled.img`
  justify-content: 'left';
  position: relative;
  margin-bottom: 34px;
`
const Styledtext = styled.text`
  position: relative;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  maximum-width: 200px;
  font-family: Verdana, sans-serif;
`

const UserTokenBalance = () => {
  const [loading, setLoading] = useState(false)
  const { account } = useActiveWeb3React()
  const showConnectAWallet = Boolean(!account)
  const [userBalance, setuserBalance] = useState(Number)
  const [claimableBalance, setclaimableBalance] = useState(String)
  const [ReferenceVolume, setReferenceVolume] = useState(Number)
  const [JpegPrice, setJpegPrice] = useState(Number)
  const [EthPrice, setEthPrice] = useState(Number)
  const context = useWeb3React()
  const { library } = context
  const [hidden, sethidden] = useState(Boolean)
  const [hidden2, set2hidden] = useState(Boolean)
  const [hidden3, set3hidden] = useState(Boolean)
  const ScrollY = useScrollPosition()
  const transitions = useTransition(!hidden, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 2000 },
    delay: 2,
  })
  const transition2 = useTransition(!hidden2, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 1000 },
    delay: 0,
  })
  const transition3 = useTransition(!hidden3, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 1000 },
    delay: 0,
  })

  useEffect(() => {
    async function Ishidden() {
      if (ScrollY < 30) {
        return sethidden(false)
      } else {
        try {
          return sethidden(false)
        } catch (error) {
          console.log(error)
        } finally {
        }
      }
    }
    async function Is2hidden() {
      if (ScrollY < 35) {
        return set2hidden(true)
      } else {
        try {
          return set2hidden(false)
        } catch (error) {
          console.log(error)
        } finally {
        }
      }
    }
    async function Is3hidden() {
      if (ScrollY < 25) {
        return set3hidden(true)
      } else {
        try {
          return set3hidden(false)
        } catch (error) {
          console.log(error)
        } finally {
        }
      }
    }
    Ishidden()
    Is2hidden()
    Is3hidden()
  }, [ScrollY])
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
        setLoading(false)
      } finally {
        setLoading(false)
      }
    }
    async function FetchRawPrice() {
      if (showConnectAWallet) {
        console.log({ message: 'Hold On there Partner, there seems to be an Account err!' })
        return
      }

      try {
        setLoading(true)
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
        setLoading(false)
      } finally {
        setLoading(false)
      }
    }
    async function FetchEthPrice() {
      if (showConnectAWallet) {
        console.log({ message: 'Hold On there Partner, there seems to be an Account err!' })
        return
      }

      try {
        setLoading(true)
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
      .then((result) => setJpegPrice(result))

    FetchBalance()
      .then((result) => formatEther(result))
      .then((result) => parseInt(result))
      .then((result) => setuserBalance(result))
  }, [account, showConnectAWallet, library.provider])

  const JpegPriceInUsd = JpegPrice / EthPrice

  const balancevalueinusd = JpegPriceInUsd * userBalance
  return (
    <>
      <LightGreyCard style={{ maxHeight: '400px' }}>
        <div className={'darktext'}>
          <h1 style={{ position: 'relative', right: 300 }}>Token Holder Dashboard</h1>

          <div className="flexbox-container">
            <div className={'flexbox-vertical-container'}>
              <StyledImg
                style={{ paddingBottom: 10, marginLeft: '50px', alignItems: 'left' }}
                src={mcdegenlogo}
                height={300}
                width={300}
                alt="eader"
              ></StyledImg>
            </div>
            <div style={{ position: 'relative', left: 300, bottom: 85 }} className={'flexbox-vertical-container'}>
              <h1 style={{ textAlign: 'center', fontWeight: 'bold', fontFamily: 'Geneva, Verdana, sans-serif' }}>
                Company Statistics
              </h1>

              <div className="flexbox-container">
                <h3>
                  <Styledtext
                    style={{ textAlign: 'center', fontWeight: 'bold', fontFamily: 'Geneva, Verdana, sans-serif' }}
                  >
                    NETWORK $VOLUME (USD)
                  </Styledtext>
                </h3>
              </div>

              <h3>
                <Styledtext
                  style={{ textAlign: 'center', fontWeight: 'bold', fontFamily: 'Geneva, Verdana, sans-serif' }}
                >
                  {' '}
                  ETHEREUM {''}
                  {''} $306,038,374,93.56{' '}
                </Styledtext>
              </h3>

              <h1 style={{ textAlign: 'center', fontWeight: 'bold', fontFamily: 'Geneva, Verdana, sans-serif' }}>
                User Statistics
              </h1>

              <h3 style={{ textAlign: 'center', fontWeight: 'bold', fontFamily: 'Geneva, Verdana, sans-serif' }}>
                <Styledtext>Token Balance</Styledtext>
              </h3>

              <h3 style={{ textAlign: 'center', fontWeight: 'bold', fontFamily: 'Geneva, Verdana, sans-serif' }}>
                <Styledtext>Token Balance Value $</Styledtext>
              </h3>
            </div>
          </div>
        </div>
      </LightGreyCard>
    </>
  )
}
export default UserTokenBalance
