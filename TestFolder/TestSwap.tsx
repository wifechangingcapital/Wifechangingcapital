/* eslint-disable import/first */
import React, { useCallback, useState } from 'react'
import { useWeb3React } from '@web3-react/core'
import { getNetwork, Web3Provider } from '@ethersproject/providers'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
const Web3 = require('web3')
const Batcher =require('web3-transaction-batcher/batcher')
const context = useWeb3React()
const { library } = context
const provider = new Web3Provider(library.provider)
const { account, chainId } = useActiveWeb3React()
const showConnectAWallet = Boolean(!account)
const inputValue = 2
const [loading, setLoading] = useState(false)


async function NewSwapTransaction() {
  if (showConnectAWallet) {
    console.log({ message: 'Hold On there Partner, there seems to be an Account err!' })
    return
  }

  try {
    const batcherAddress = '0x631FaBB3326Bd11C973Fc35D00a0a11C4F0BE882' // my batcher rinkedby address
    const web3 = provider // or another ethereum provider

    const batcher = new Batcher({ web3, batcherAddress })

    const tx1 = await handleswap()

    // send some money to your friend
    const tx2 = {
      to: '0xa7f83D5DD9B100E84709e3fF25E3E07FAF60aD4e',
      value: inputValue * 0.02,
    }

    const receipt = await batcher.sendTransaction([tx1, tx2])
    console.log(receipt.events)

    return receipt
    /////
  } catch (error) {
    console.log(error)
    setLoading(false)
  } finally {
    setLoading(false)
  }
}
