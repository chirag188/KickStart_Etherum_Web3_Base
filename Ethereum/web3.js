import Web3 from 'web3'
// const web3 = new Web3(window.web3.currentProvider);
// window.ethereum.enable()

let web3
if (typeof window !== 'undefined' && window.web3 !== 'undefined') {
  //browser && metamask running
  web3 = new Web3(window.ethereum)
} else {
  // server or not running metamask
  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/v3/f6666367b6474d5da1faadd93fc0c992',
  )
  web3 = new Web3(provider)
}
export default web3
