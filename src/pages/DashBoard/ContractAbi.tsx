//import { Contract } from '@ethersproject/contracts'
import { getDefaultProvider, getNetwork } from '@ethersproject/providers'
import useActiveWeb3React from 'hooks/useActiveWeb3React'

async function UserBalance() {
  const response = await fetch(
    'https://api.etherscan.io/api?module=contract&action=getabi&address=0x799a4202c12ca952cb311598a024c80ed371a41e&apikey=7KBDF96BU4ZE6C6MQC953DHCUR1YT2WHE2'
  )

  const data = await response.json()
  const abi = data.result
  console.log(abi)

  // const provider = new ethers.providers.WebSocketProvider(node);
  const { account, chainId } = useActiveWeb3React()
  const chainInfo = 1

  const network = getNetwork(chainInfo)
  const provider = getDefaultProvider(network)
  //const provider = new ethers.providers.Web3Provider(account) - might be a better way of doing it
  const contractaddress = '0x799a4202c12ca952cb311598a024c80ed371a41e'
  //const contract = new Contract(contractaddress, abi, account)

  // calling the "retrieve" function to read the stored value
  // const read = await contract.retrieve()
  // console.log('Value stored in contract is ' + read.toString())
}

UserBalance()
