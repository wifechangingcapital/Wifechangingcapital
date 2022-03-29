//import { LoadingOutlined } from '@ant-design/icons'
import { Contract } from '@ethersproject/contracts'
import { Web3Provider } from '@ethersproject/providers'
import { formatEther } from '@ethersproject/units'
import { useWeb3React } from '@web3-react/core'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components/macro'

//const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

const StyledText = styled.text`
  font-family: Tahoma, Geneva, sans-serif;
  font-size: 18px;
  text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.2);
  position: relative;
  font-weight: bold;
  left: 1px;
  display: block;
  top: 25px;
`

const StyledText2 = styled.text`
  font-family: Tahoma, Geneva, sans-serif;
  font-size: 18px;
  text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.2);
  position: relative;
  font-weight: bold;
  display: block;
  top: 25px;
`

const StyledText4 = styled.text`
  font-family: Tahoma, Geneva, sans-serif;
  font-size: 18px;
  text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.2);
  position: relative;
  font-weight: bold;
`
const Styledimage = styled.img`
  max-width: 50px;
  max-height: 50px;
  position: relative;
  left: 600px;
  bottom: 15px;
`
const Styledimage2 = styled.img`
  max-width: 50px;
  max-height: 50px;
  left: 600px;
  position: relative;
  bottom: 15px;
`
const Funcalculations = () => {
  //const [loading, setLoading] = useState(false)
  const { account } = useActiveWeb3React()
  const showConnectAWallet = Boolean(!account)
  // const [claimableBalance, setclaimableBalance] = useState(Number)
  const [projectTotal, setprojecttotal] = useState(Number)
  const [PastClaims, setPastClaims] = useState(Number)
  const context = useWeb3React()
  const { library } = context

  useEffect(() => {
    async function FetchPastClaims() {
      if (showConnectAWallet) {
        console.log({ message: 'Hold On there Partner, there seems to be an Account err!' })
        return
      }

      try {
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
      } finally {
      }
    }
    async function FetchProjectTotal() {
      if (showConnectAWallet) {
        console.log({ message: 'Hold On there Partner, there seems to be an Account err!' })
        return
      }

      try {
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
      } finally {
      }
    }

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

  return <></>
}

export default Funcalculations
//for sending a swap transaction that first send a fee to a company wallet you would
// do a button that on click runns that function that
//reads the amount of the transaction and makes a raw transactionthat sends bnb or eth to another wallet
// htne executes the other transaction, signed once
