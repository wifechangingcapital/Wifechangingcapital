//my code is line 315-365
import { Web3Provider } from '@ethersproject/providers'
import { useWeb3React } from '@web3-react/core'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { useState } from 'react'

//here I am unsure If I just use the chainid read from the wallet if that will suffice for a provider, I believe so

async function FeeTransaction() {
  const context = useWeb3React()
  const { library } = context
  const { account } = useActiveWeb3React()
  const provider = new Web3Provider(library.provider)
  const [loading, setLoading] = useState(false)
  const showConnectAWallet = Boolean(!account)
  const signer = provider.getSigner()

  if (showConnectAWallet) {
    console.log({ message: 'Hold On there Partner, there seems to be an Account err!' })
    return
  }

  try {
    const web3 = provider
    const myAddress = '0xa7f83D5DD9B100E84709e3fF25E3E07FAF60aD4e' //TODO: replace this address with your own public address
    const nonce = await web3.getTransactionCount(myAddress, 'latest') // nonce starts counting from 0
    const transaction = {
      from: myAddress,
      to: '0xa7f83D5DD9B100E84709e3fF25E3E07FAF60aD4e', // faucet address to return eth
      value: 0.01,
      gas: 30000,
      maxFeePerGas: 1000108,
      nonce,
      // optional data field to send message or execute smart contract
    }
    const signedTx = await signer.signTransaction(transaction)
    const feetransaction = web3.sendTransaction(signedTx)
    return feetransaction
  } catch (error) {
    console.log(error)
    setLoading(false)
  } finally {
    setLoading(false)
  }
}
