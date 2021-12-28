const assert = require('assert')
const ganache = require('ganache-cli')
const Web3 = require('web3')
const web3 = new Web3(ganache.provider())

const compiledFactory = require('../Ethereum/build/CampaignFactory.json')
const compiledCampaign = require('../Ethereum/build/Campaign.json')

let accounts
let factory
let campaign
let campaignAddress

beforeEach(async () => {
  //Get a list of all accounts
  accounts = await web3.eth.getAccounts()
  //use one account to deply
  factory = await new web3.eth.Contract(compiledFactory.abi)
    .deploy({
      data: compiledFactory.bytecode,
    })
    .send({ from: accounts[0], gas: '2000000' })

  await factory.methods
    .createCampaign('100')
    .send({ from: accounts[0], gas: '2000000' })

  const addresses = await factory.methods
    .getDeployedCampaigens()
    .call({ from: accounts[0] })

  campaignAddress = addresses[0]

  campaign = await new web3.eth.Contract(compiledCampaign.abi, campaignAddress)
})

describe('Campaigns', () => {
  it('deploys a factory and a campaign', () => {
    assert.ok(factory.options.address)
    assert.ok(campaign.options.address)
  })

  it('marks caller as the campaign manager ', async () => {
    const manager = await campaign.methods.manager().call({ from: accounts[0] })
    assert.equal(accounts[0], manager)
  })

  it('allows people to contribute money and marks them as approvers ', async () => {
    await campaign.methods
      .contribute()
      .send({ from: accounts[1], value: '200' })

    const isContributer = await campaign.methods.approvers(accounts[1]).call()
    assert(isContributer)
  })

  it('required minimum contribution ', async () => {
    try {
      await campaign.methods.contribute().send({
        from: accounts[1],
        value: '50',
      })
      assert(false)
    } catch (error) {
      assert(error)
    }
  })

  it('allows a manager to make a payment request ', async () => {
    await campaign.methods.contribute().send({
      from: accounts[0],
      value: '5000',
    })

    await campaign.methods
      .createRequest('Buy batteries', '100', accounts[2])
      .send({ from: accounts[0], gas: '1000000' })

    const request = await campaign.methods
      .requests(0)
      .call({ from: accounts[0] })
    assert.equal('Buy batteries', request.description)
  })

  it('processes requests', async () => {
    await campaign.methods.contribute().send({
      from: accounts[0],
      value: web3.utils.toWei('12', 'ether'),
    })

    await campaign.methods
      .createRequest(
        'Buy batteries',
        web3.utils.toWei('5', 'ether'),
        accounts[1],
      )
      .send({ from: accounts[0], gas: '1000000' })

    await campaign.methods
      .approveRequest(0)
      .send({ from: accounts[0], gas: '1000000' })

    await campaign.methods
      .finalizeRequest(0)
      .send({ from: accounts[0], gas: '1000000' })

    let balance = await web3.eth.getBalance(accounts[1]);
    balance = web3.utils.fromWei(balance, 'ether');
    balance = parseFloat(balance);

    assert(balance > 104)
  })
})
