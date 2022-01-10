import React, { Component } from 'react'
import { Button, Card } from 'semantic-ui-react'
import Layout from '../components/Layout'
import factory from '../Ethereum/factory'
// import 'semantic-ui-css/semantic.min.css'
import { Link } from '../routes'
import web3 from '../Ethereum/web3'
class CampaignIndex extends Component {
  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigens().call()
    return { campaigns }
  }
  fetchaccount = async () => {
    try {
      const accounts = await web3.eth.getAccounts()
      console.log(accounts)
    } catch (error) {}
  }
  renderCampaigns() {
    const items = this.props.campaigns.map((address) => {
      return {
        header: address,
        description: (
          <Link route={`/campaigns/${address}`}>
            <a>View Campaign</a>
          </Link>
        ),
        fluid: true,
      }
    })

    return <Card.Group items={items} />
  }
  render() {
    return (
      <Layout>
        <div>
          <h4 onClick={() => this.fetchaccount()}>Open Campaigns</h4>
          <Link route="/campaigns/new">
            <a>
              <Button
                content="Create Campaign"
                icon="plus"
                floated="right"
                labelPosition="left"
                primary
              />
            </a>
          </Link>
          {this.renderCampaigns()}
        </div>
      </Layout>
    )
  }
}

export default CampaignIndex
