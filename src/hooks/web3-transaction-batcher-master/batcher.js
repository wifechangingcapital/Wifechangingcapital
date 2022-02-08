import { Contract } from '@ethersproject/contracts'

//const provider = new EtherscanProvider(network, '432BW4Y2JX817J6CJAWGHAFTXQNFVXRU2Q')
const batcheraddress = '0x631FaBB3326Bd11C973Fc35D00a0a11C4F0BE882' // "clienttokenaddress"

export default class Batcher {
  constructor(options = {}) {
    if (!options.contract) {
      throw Error(`Batcher must be instantiated with a contract address`)
    }
    if (!options.web3) {
      throw Error(`Batcher must be instantiated with a web3 instance`)
    }
    this.web3 = options.web3
    async function AbiAddress() {
      const response = await fetch('http://127.0.0.1:5500/src/hooks/web3-transaction-batcher-master/build.json')
      const data = await response.json()
      const abi = data
      //  const context = useWeb3React()
      //const { library } = context
      //const provider = new Web3Provider(library.provider)
      //const provider = getDefaultProvider(network)
      //const library = getLibrary(provider)

      const contractBytecode = abi.evm.bytecode.object
      this.contract = new Contract(abi, options.contract)
      // const contract = new Contract(abi,batcheraddress,signer)
    }
  }
  sendTransaction(transactions, callback) {
    const targets = []
    const values = []
    const datas = []
    let from
    let value = 0
    transactions.map((tx) => {
      // console.log(tx)
      targets.push(tx.to || '0x')
      values.push(tx.value || 0)
      value += tx.value || 0
      datas.push(tx.data || '0x')
      if (!from) {
        from = tx.from
      }
    })
    const tx = {
      data: this.contract.methods.batchSend(targets, values, datas).encodeABI(),
      to: this.contract.options.address,
      value,
    }
    return this.web3.sendTransaction(tx, callback)
  }
}
