import { LoadingOutlined } from '@ant-design/icons'
import { Contract } from '@ethersproject/contracts'
import { Web3Provider } from '@ethersproject/providers'
import { useWeb3React } from '@web3-react/core'
import { LightGreyCard } from 'components/Card'
//import { RowBetween } from 'components/Row'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
//import useAddTokenToMetamask from 'hooks/useAddTokenToMetamask' - /////from transaction cofrimation modal index line 127
import { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components/macro'

import header from '../../assets/images/header.png'
import { useERC20PermitSignature } from './ERC20permit'

const ClaimButton = styled.button`
  position: relative;
  display: 'block';
  right: 45px;
  left: 527px;
  text-color: #ffffff;
  bottom: 155px;
  padding: 10px 40px;
  border-radius: 25px;
  background-image: linear-gradient(45deg, rgb(255, 0, 0) 0%, rgb(255, 148, 0) 70%, rgb(255, 253, 43) 100%);
  box-shadow: rgb(0, 0, 0) 0px 0px 7px 1px;
  border: 0px groove rgb(28, 110, 164);
  font-family: Verdana, Geneva, sans-serif;
  font-size: 12px;
  font-weight: bold;
  transition: border-color 0.5s ease-out;
  &:hover {
      background-color: #ff9d1c;
      color: black;
`
const StyledImg = styled.img`
  justify-content: 'right';
  position: relative;
  margin-bottom: 34px;
`
// left: 600px;
//top: 50px;
const DonateButton = styled.button`
  padding: 10px 4px;
  display: 'block';
  position: relative;
  font-color: #ffffff;
  left: 525px;
  bottom: 175px;
  border-radius: 25px;
  background-image: linear-gradient(45deg, rgb(255, 0, 0) 0%, rgb(255, 148, 0) 70%, rgb(255, 253, 43) 100%);
  box-shadow: rgb(0, 0, 0) 0px 0px 7px 1px;
  border: 0px groove rgb(28, 110, 164);
  font-family: Verdana, Geneva, sans-serif;
  font-size: 12px;
  font-weight: bold;
  transition: border-color 0.5s ease-out;
  &:hover {
      background-color: #ff9d1c;
      color: black;
`
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

const ClaimTransaction = () => {
  const [Bigloading, setLoading] = useState(false)
  const { account } = useActiveWeb3React()
  const showConnectAWallet = Boolean(!account)
  const context = useWeb3React()
  const { library } = context
  const provider = new Web3Provider(library.provider)
  const signer = provider.getSigner()
  const [ABI, setContractABI] = useState(String)
  const ROUTER02ADDRESS = '0x15B6f4521ff9C14c951A13E498A94FBBf3D0A2F7' //router02 rinkeby
  const FACTORYADDRESS = '0xa585F622AD2B7e88aFa3c3C44cb14D333e7f3191' //factory rinkeby
  const router = ROUTER02ADDRESS
  //const { addToken, success } = useAddTokenToMetamask(currencyToAdd)
  useEffect(() => {
    async function FetchABI() {
      if (showConnectAWallet) {
        console.log({ message: 'Hold On there Partner, there seems to be an Account err!' })
        return
      }
      try {
        setLoading(true)
        const response = await fetch(
          'https://api-rinkeby.etherscan.io/api?module=contract&action=getabi&address=0x3D8051F7c057d1b77b27D8DbBE638EAff0359EAa&apikey=432BW4Y2JX817J6CJAWGHAFTXQNFVXRU2Q'
        ) //ClientTokenABIneeded
        const data = await response.json()
        const abi = data.result
        console.log(abi)
        return abi
      } catch (error) {
        console.log(error)
        setLoading(false)
      } finally {
        setLoading(false)
      }
    }

    FetchABI().then((result) => setContractABI(result))
  }, [account, showConnectAWallet, library.provider])

  const contractaddress = '0x3D8051F7c057d1b77b27D8DbBE638EAff0359EAa'
  const contract = new Contract(contractaddress, ABI, signer)
  const signaturerequest = useERC20PermitSignature(account, router, 5, contract, library.provider, provider)

  const SignTransaction = useCallback(async () => {
    if (showConnectAWallet) {
      console.log({ message: 'Hold On there Partner, there seems to be an Account err!' })
      return
    }

    try {
      setLoading(true)
      const response = await fetch(
        'https://api-rinkeby.etherscan.io/api?module=contract&action=getabi&address=0x3D8051F7c057d1b77b27D8DbBE638EAff0359EAa&apikey=432BW4Y2JX817J6CJAWGHAFTXQNFVXRU2Q'
      ) //ClientTokenABIneeded
      const data = await response.json()
      const abi = data.result
      const contractaddress = '0x3D8051F7c057d1b77b27D8DbBE638EAff0359EAa' // "clienttokenaddress"
      const contract = new Contract(contractaddress, abi, signer)
      const Permit = await contract.permit(signaturerequest) //.claim()
      return Permit
      /////
    } catch (error) {
      console.log(error)
      setLoading(false)
    } finally {
      setLoading(false)
    }
  }, [showConnectAWallet, signer, signaturerequest])

  return (
    <>
      <LightGreyCard
        style={{
          fontSize: '12x',
          maxWidth: '800px',
          maxHeight: 200,
          marginBottom: '10px',
        }}
      >
        <StyledImg
          style={{ paddingBottom: 10, alignItems: 'left' }}
          src={header}
          height={200}
          width={400}
          alt="eader"
        ></StyledImg>

        <DonateButton style={{ display: 'block' }} onClick={SignTransaction}>
          Permit
        </DonateButton>
        <ClaimButton color="secondary"></ClaimButton>
      </LightGreyCard>
    </>
  )
}

export default ClaimTransaction
