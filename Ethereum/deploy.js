const HDWalletProvider = require('truffle-hdwallet-provider')
const Web3 = require('web3')
const compiledFactory = require('./build/CampaignFactory.json')
// const compiledCampaign = require('./Ethereum/build/Campaign.json')
// 0x40f9d92e1B825c8cB818BfDf57d04DADeEe32593

const provider = new HDWalletProvider(
  'slim stable awesome magic wreck purity script dance stuff raven pet shy',
  'https://rinkeby.infura.io/v3/f6666367b6474d5da1faadd93fc0c992',
)

const web3 = new Web3(provider)

const deploy = async () => {
  try {
    const accounts = await web3.eth.getAccounts()

    const gasLimit = await new web3.eth.Contract(compiledFactory.abi)
      .deploy({
        data: '0x' + compiledFactory.bytecode,
      })
      .estimateGas({ from: accounts[0] })
    const result = await new web3.eth.Contract(compiledFactory.abi)
      .deploy({
        data: '0x' + compiledFactory.bytecode,
      })
      .send({ from: accounts[0], gas: gasLimit })
    console.log(result.options.address, gasLimit)
  } catch (error) {
    console.log(error)
  }
}
deploy()
