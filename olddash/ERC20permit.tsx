import { splitSignature } from '@ethersproject/bytes'
import { Contract } from '@ethersproject/contracts'
import { Web3Provider } from '@ethersproject/providers'

export const useERC20PermitSignature = async (
  owner: string | null | undefined,
  spender: string,
  amount: number,
  contract: Contract,
  library: Web3Provider,
  provider: Web3Provider
) => {
  try {
    const transactionDeadline = Date.now() + 20 * 60
    const nonce = await contract.nonces(owner)
    const contractName = await contract.name()
    console.log(contractName)
    const EIP712Domain = [
      { name: 'name', type: 'string' },
      { name: 'version', type: 'string' },
      { name: 'chainId', type: 'uint256' },
      { name: 'verifyingContract', type: 'address' },
    ]
    const domain = {
      name: contractName,
      version: '1',
      chainId: 4,
      verifyingContract: contract.address,
    }
    const Permit = [
      { name: 'owner', type: 'address' },
      { name: 'spender', type: 'address' },
      { name: 'value', type: 'uint256' },
      { name: 'nonce', type: 'uint256' },
      { name: 'deadline', type: 'uint256' },
    ]
    const message = {
      owner,
      spender,
      value: amount.toString(),
      nonce: nonce.toHexString(),
      deadline: transactionDeadline,
    }
    const data = JSON.stringify({
      types: {
        EIP712Domain,
        Permit,
      },
      domain,
      primaryType: 'Permit',
      message,
    })
    const signature = await provider.send('eth_signTypedData_v4', [owner, data])
    console.log(signature)
    const signData = splitSignature(signature as string)
    console.log(signData)
    const { r } = signData
    console.log(r)
    const s = signData
    console.log(s)
    const v = signData
    console.log(v)
    const permit = await contract.permit(owner, spender, 5, r, s, v, transactionDeadline)
    //this used to retun all the split signature values and the transactiondeadline...
    //I am unsure If I need the singauter data alone or if I need some has of a successful permit function
    //with the data what could they do? 
    return {
      permit,
    }
  } catch (e) {
    console.log('error', e)
    return e
  }
}
