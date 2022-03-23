import { Contract } from '@ethersproject/contracts'
import { Web3Provider } from '@ethersproject/providers'
import { formatEther } from '@ethersproject/units'
import { useWeb3React } from '@web3-react/core'
import { Col, Row } from 'antd'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components/macro'

import { DarkCard, LightGreyCard } from '../../components/Card'
import useActiveWeb3React from '../../hooks/useActiveWeb3React'

const Styledtext = styled.text`
  text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.2);
  font-size: 22px;
  text-color: #000000;
  text-align: 'center';
  font-weight: bold;
`

export default function CompanyMetrics() {
  const [loading, setLoading] = useState(false)
  const { account } = useActiveWeb3React()
  const showConnectAWallet = Boolean(!account)
  const [EthReserves, setEthReserves] = useState(Number)
  const [JpegReserves, setJpegReserves] = useState(Number)
  const context = useWeb3React()
  const { library } = context
  const [JpegPrice, setJpegPrice] = useState(Number)
  const [EthPrice, setEthPrice] = useState(Number)

  useEffect(() => {
    const provider = new Web3Provider(library.provider)
    async function FetchRawPrice() {
      if (showConnectAWallet) {
        console.log({ message: 'Hold On there Partner, there seems to be an Account err!' })
        return
      }

      try {
        setLoading(true)
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
        const DisplayJpegPrice = JpegPrice
        console.log(DisplayJpegPrice)
        return DisplayJpegPrice
      } catch (error) {
        console.log(error)
        setLoading(false)
      } finally {
        setLoading(false)
      }
    }
    async function FetchEthReserve() {
      if (showConnectAWallet) {
        console.log({ message: 'Hold On there Partner, there seems to be an Account err!' })
        return
      }

      try {
        setLoading(true)
        const response = await fetch(
          'https://api-rinkeby.etherscan.io/api?module=contract&action=getabi&address=0xEC33992fd60A350500c543b3B0E1D90fDCaFb10a&apikey=432BW4Y2JX817J6CJAWGHAFTXQNFVXRU2Q'
        ) // Api Key also the pair contract

        const data = await response.json()
        const abi = data.result
        console.log(abi)
        const contractaddress = '0xEC33992fd60A350500c543b3B0E1D90fDCaFb10a' // need uniswapv2pair
        const contract = new Contract(contractaddress, abi, provider)
        const Reserves = await contract.getReserves()
        const JpegReserveB = await Reserves._reserve1
        const DisplayEthReserves = JpegReserveB
        return DisplayEthReserves
      } catch (error) {
        console.log(error)
        setLoading(false)
      } finally {
        setLoading(false)
      }
    }
    async function FetchJpegReserve() {
      if (showConnectAWallet) {
        console.log({ message: 'Hold On there Partner, there seems to be an Account err!' })
        return
      }

      try {
        setLoading(true)
        const response = await fetch(
          'https://api-rinkeby.etherscan.io/api?module=contract&action=getabi&address=0xEC33992fd60A350500c543b3B0E1D90fDCaFb10a&apikey=432BW4Y2JX817J6CJAWGHAFTXQNFVXRU2Q'
        ) // Api Key also the pair contract

        const data = await response.json()
        const abi = data.result
        console.log(abi)
        const contractaddress = '0xEC33992fd60A350500c543b3B0E1D90fDCaFb10a' // need uniswapv2pair
        const contract = new Contract(contractaddress, abi, provider)
        const Reserves = await contract.getReserves()
        const JpegReserveA = await Reserves._reserve0
        const DisplayJpegReserves = JpegReserveA
        console.log(DisplayJpegReserves)
        return DisplayJpegReserves
      } catch (error) {
        console.log(error)
      } finally {
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

    FetchEthReserve()
      .then((result) => formatEther(result))
      .then((result) => JSON.parse(result))
      .then((result) => result.toFixed(3))
      .then((result) => setEthReserves(result))

    FetchJpegReserve()
      .then((result) => formatEther(result))
      .then((result) => JSON.parse(result))
      .then((result) => result.toFixed(3))
      .then((result) => setJpegReserves(result))

    FetchRawPrice()
      .then((result) => formatEther(result))
      .then((result) => JSON.parse(result))
      .then((result) => result.toFixed(3))
      .then((result) => setJpegPrice(result))
  }, [account, showConnectAWallet, library.provider])

  const JpegPriceInUsd = JpegPrice / EthPrice
  const MarketCap = [(JpegPrice / EthPrice) * 10000000] // essentially jpegusd price divided by total supply
  const ReserveAinUsd = JpegReserves * JpegPriceInUsd
  const ReserveBinUsd = EthReserves * EthPrice
  const TotalLiquidity = ReserveAinUsd + ReserveBinUsd
  return (
    <>
      <div style={{ position: 'relative', right: 75 }}>
        <LightGreyCard style={{ maxWidth: 600, width: 500, boxShadow: '0px 0px 10px 1px rgba(0,0,0,0.40)' }}>
          <h1 style={{ textAlign: 'center', fontWeight: 'bold', fontFamily: 'Geneva, Verdana, sans-serif' }}>
            Metrics
          </h1>
          <Row>
            <Col span={12}>
              <DarkCard
                style={{
                  maxWidth: 200,
                  maxHeight: 100,
                  position: 'relative',
                  left: 10,
                  paddingLeft: 75,
                  paddingTop: 50,
                  paddingRight: 75,
                  boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.40)',
                }}
              >
                {' '}
                MarketCap: {MarketCap}
              </DarkCard>
            </Col>
            <Col span={12}>
              <DarkCard
                style={{
                  maxWidth: 200,
                  maxHeight: 100,
                  position: 'relative',
                  left: 30,
                  paddingLeft: 75,
                  paddingTop: 50,
                  paddingRight: 75,
                  boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.40)',
                }}
              >
                {' '}
                $WCC Price: {JpegPriceInUsd}
              </DarkCard>
            </Col>
          </Row>
          <p></p>
          <p></p>
          <Row>
            <Col span={12}>
              <DarkCard
                style={{
                  maxWidth: 200,
                  maxHeight: 100,
                  position: 'relative',
                  left: 10,
                  paddingLeft: 75,
                  paddingTop: 50,
                  paddingRight: 75,
                  boxShadow: '0px 0px 10px 1px rgba(0,0,0,0.40)',
                }}
              >
                Total Liquidity: {TotalLiquidity}
              </DarkCard>
            </Col>
            <Col span={12}>
              <DarkCard
                style={{
                  maxWidth: 200,
                  maxHeight: 100,
                  position: 'relative',
                  left: 30,
                  paddingLeft: 75,
                  paddingTop: 50,
                  paddingRight: 75,
                  boxShadow: '0px 0px 10px 1px rgba(0,0,0,0.40)',
                }}
              ></DarkCard>
            </Col>
          </Row>
        </LightGreyCard>
      </div>
    </>
  )
}
