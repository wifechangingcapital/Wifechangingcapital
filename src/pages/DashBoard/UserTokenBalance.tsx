// eslint-disable-next-line no-restricted-imports
import 'antd/dist/antd.css'

import { LoadingOutlined } from '@ant-design/icons'
import { Contract } from '@ethersproject/contracts'
import { Web3Provider } from '@ethersproject/providers'
import { formatEther } from '@ethersproject/units'
import { useWeb3React } from '@web3-react/core'
import { Card, Col, Row } from 'antd'
import { LightGreyCard } from 'components/Card'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components/macro'
import { String } from 'typescript-string-operations'

const Newinput = styled.input`
  border: 2px solid;
  border-radius: 25px;
  text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.2);
  font-size: 12px;
  text-color: #ffffff;
  margin: 0.25rem;
  min-width: 175px;
  padding: 0.5rem;
  transition: border-color 0.5s ease-out;
  background: #ff3333;
  font-weight: bold;
`
const Styledtext = styled.text`
  text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.2);
  font-size: 18px;
  text-color: #ffffff;
  font-weight: bold;
`
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

const gridStyle = {
  width: '50%',
}

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
      <div className={'flexbox-container'}>
        <LightGreyCard
          style={{
            maxWidth: 700,
            width: 'auto',
            height: 'auto',
            position: 'relative',
            right: 375,
            boxShadow: '0px 0px 10px 1px rgba(0,0,0,0.40)',
          }}
        >
          <h1 style={{ textAlign: 'center', fontWeight: 'bold', fontFamily: 'Geneva, Verdana, sans-serif' }}>
            Company Statistics
          </h1>
          <Card.Grid hoverable={false} style={gridStyle}>
            <Row>
              <Col span={12}>NETWORK</Col>
              <Col span={12}>VOLUME (USD)</Col>
            </Row>
          </Card.Grid>
          <Card.Grid hoverable={false} style={gridStyle}>
            <Row>
              <Col span={12}>NETWORK</Col>
              <Col span={12}>$VOLUME (USD)</Col>
            </Row>
          </Card.Grid>
          <Card.Grid hoverable={false} style={gridStyle}>
            <Row>
              <Col span={12}>Etherum</Col>
              <Col span={12}>$304,34093.00</Col>
            </Row>
          </Card.Grid>
          <Card.Grid hoverable={false} style={gridStyle}>
            <Row>
              <Col span={12}>Polygon</Col>
              <Col span={12}>$304,3497.00</Col>
            </Row>
          </Card.Grid>
        </LightGreyCard>
        <p></p>
        <LightGreyCard
          style={{
            maxWidth: 700,
            position: 'relative',
            left: 375,
            bottom: 244,
            boxShadow: '0px 0px 10px 1px rgba(0,0,0,0.40)',
          }}
        >
          <h1 style={{ textAlign: 'center', fontWeight: 'bold', fontFamily: 'Geneva, Verdana, sans-serif' }}>
            User Statistics
          </h1>
          <Card.Grid hoverable={false} style={gridStyle}>
            <Row>
              <Col span={12}>Your Token Balance</Col>
              <Col span={12}>{userBalance}</Col>
            </Row>
          </Card.Grid>
          <Card.Grid hoverable={false} style={gridStyle}>
            <Row>
              <Col span={12}> Your Balance in USD </Col>
              <Col span={12}>{balancevalueinusd}</Col>
            </Row>
          </Card.Grid>
          <Card.Grid hoverable={false} style={gridStyle}>
            <Row>
              <Col span={12}> Your Claimable Balance</Col>
              <Col span={12}>{claimableBalance}</Col>
            </Row>
          </Card.Grid>
          <Card.Grid hoverable={false} style={gridStyle}>
            <Row>
              <Col span={12}>Your Claimable Balance in USD</Col>
              <Col span={12}>{claimableBalance}</Col>
            </Row>
          </Card.Grid>
        </LightGreyCard>
      </div>
    </>
  )
}
export default UserTokenBalance
