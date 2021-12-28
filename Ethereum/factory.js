import web3 from './web3'
import CampaignFactory from './build/CampaignFactory.json'

const instance = new web3.eth.Contract(
  CampaignFactory.abi,
  '0x6dd73111b86eDB0fb05e0aBbA3F99D99b3F8eEA4',
);

export default instance;