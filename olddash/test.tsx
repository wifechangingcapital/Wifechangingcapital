/* eslint-disable react-hooks/rules-of-hooks */
import { LoadingOutlined } from '@ant-design/icons'
import { Contract } from '@ethersproject/contracts'
import { Web3Provider } from '@ethersproject/providers'
import { useWeb3React } from '@web3-react/core'
import { Spin } from 'antd'
import { LightGreyCard } from 'components/Card'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { String } from 'typescript-string-operations'

import { useERC20PermitSignature } from './ERC20permit'

const ClaimButton = styled.button`

  padding: 10px 40px;
  margin-left: 10px;
  box-shadow: rgb(0, 0, 0) 0px 0px 7px 1px;
  border: 0px groove rgb(28, 110, 164);
  font-family: Verdana, Geneva, sans-serif;
  font-size: 12px;
  font-weight: bold;
  transition: border-color 0.5s ease-out;
  &:hover {
      background-color: #ffffff;
      color: black;
`

const Styledtext = styled.text`
  text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.2);
  font-size: 18px;
  text-color: #000000;
  font-weight: bold;
`
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

const Test = () => {
  const [loading, setLoading] = useState(false)
  const { account, chainId } = useActiveWeb3React()
  const showConnectAWallet = Boolean(!account)
  const [userBalance, setuserBalance] = useState(Number)
  const [claimableBalance, setclaimableBalance] = useState(String)
  const context = useWeb3React()
  const { library } = context
  const provider = new Web3Provider(library.provider)
  const signer = provider.getSigner()
  const ROUTER02ADDRESS = '0x15B6f4521ff9C14c951A13E498A94FBBf3D0A2F7' //router02 rinkeby
  const FACTORYADDRESS = '0xa585F622AD2B7e88aFa3c3C44cb14D333e7f3191' //factory rinkeby
  const router = ROUTER02ADDRESS
  async function Handlecollateral() {
    if (showConnectAWallet) {
      console.log({ message: 'Hold On there Partner, there seems to be an Account err!' })
      return
    }

    try {
      setLoading(true)
      const response = await fetch(
        'https://api-rinkeby.etherscan.io/api?module=contract&action=getabi&address=0x3D8051F7c057d1b77b27D8DbBE638EAff0359EAa&apikey=432BW4Y2JX817J6CJAWGHAFTXQNFVXRU2Q'
      ) // pair abi
      const data = await response.json()
      const abi = data.result
      console.log(abi)
      const contractaddress = '0x3D8051F7c057d1b77b27D8DbBE638EAff0359EAa' // "clienttokenaddress"
      const contract = new Contract(contractaddress, abi, signer)
      const signaturerequest = useERC20PermitSignature(account, router, 5, contract, library, provider)
      const Permit = await signaturerequest
      console.log(Permit)
      return Permit
      /////0x8A2b5F4308d896feCe6be7ce4Ec304Bd1d1DfE63 - jpeg orgran
    } catch (error) {
      console.log(error)
      setLoading(false)
    } finally {
      setLoading(false)
    }
  }

  async function HandlePermit() {
    if (showConnectAWallet) {
      console.log({ message: 'Hold On there Partner, there seems to be an Account err!' })
      return
    }

    try {
      setLoading(true)
      const response = await fetch(
        'https://api-rinkeby.etherscan.io/api?module=contract&action=getabi&address=0x3D8051F7c057d1b77b27D8DbBE638EAff0359EAa&apikey=432BW4Y2JX817J6CJAWGHAFTXQNFVXRU2Q'
      ) // pair abi
      const data = await response.json()
      const abi = data.result
      console.log(abi)
      const contractaddress = '0x3D8051F7c057d1b77b27D8DbBE638EAff0359EAa' // "clienttokenaddress"
      const contract = new Contract(contractaddress, abi, signer)
      const signaturerequest = useERC20PermitSignature(account, router, 5, contract, library, provider)
      const Permit = await signaturerequest
      console.log(Permit)
      return Permit
      /////0x8A2b5F4308d896feCe6be7ce4Ec304Bd1d1DfE63 - jpeg orgran
    } catch (error) {
      console.log(error)
      setLoading(false)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <LightGreyCard
        style={{
          maxWidth: '400px',
          marginBottom: '10px',
          position: 'relative',
          right: 210,
          top: 170,
        }}
      >
        <Styledtext style={{ justifyContent: 'right', textAlign: 'left', paddingRight: 250 }}>
          {' '}
          Your Claimable Balance {''} {claimableBalance}
        </Styledtext>{' '}
        <ClaimButton disabled={!account || loading} onClick={HandlePermit}>
          Sign
        </ClaimButton>
        <ClaimButton disabled={!account || loading} onClick={HandlePermit}>
          Permit
        </ClaimButton>
      </LightGreyCard>

      <LightGreyCard
        style={{
          maxWidth: '400px',
          marginBottom: '10px',
          position: 'relative',
          right: 210,
          top: 170,
        }}
      >
        <Styledtext style={{ justifyContent: 'right', textAlign: 'right' }}>
          Your Token Balance {''} {userBalance}
        </Styledtext>
      </LightGreyCard>

      <LightGreyCard
        style={{
          textAlign: 'left',
          maxWidth: '400px',
          marginBottom: '10px',
          position: 'relative',
          left: 210,
          height: '120px',
        }}
      >
        <Styledtext> Balance Value </Styledtext>
        {userBalance}
      </LightGreyCard>
      <LightGreyCard
        style={{
          textAlign: 'left',
          maxWidth: '400px',
          marginBottom: '10px',
          position: 'relative',
          left: 210,
        }}
      >
        <Styledtext>
          {' '}
          Earnings Value {''} {claimableBalance}
          {loading ? <Spin indicator={antIcon} className="add-spinner" /> : ''}{' '}
        </Styledtext>
      </LightGreyCard>
    </>
  )
}

export default Test
