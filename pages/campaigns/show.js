import React, { Component } from 'react'
import { Button, Card, Grid } from 'semantic-ui-react'
import Layout from '../../components/Layout'
import Campaign from '../../Ethereum/campaign'
import web3 from '../../Ethereum/web3'
import ContributeForm from './../../components/ContributeForm'
import { Link } from '../../routes'

class CampaignShow extends Component {
  static async getInitialProps(props) {
    const campaign = Campaign(props.query.address)
    const summary = await campaign.methods.getSummary().call()
    return {
      address: props.query.address,
      minimumContribution: summary[0],
      balance: summary[1],
      requestsCount: summary[2],
      approvesCount: summary[3],
      manager: summary[4],
    }
  }
  renderCards = () => {
    const {
      balance,
      minimumContribution,
      requestsCount,
      approvesCount,
      manager,
    } = this.props
    console.log(this.props)
    const items = [
      {
        header: manager,
        meta: 'Address of Manager',
        description:
          'The Manager Created this campagin and can create requests to withdraw money',
        style: { overflowWrap: 'break-word' },
      },
      {
        header: minimumContribution,
        meta: 'Minimum Contribution(wei)',
        description:
          'You must contribute at least this much wei to become an approver',
        style: { overflowWrap: 'break-word' },
      },
      {
        header: requestsCount,
        meta: 'Number of Request',
        description:
          'A request tries to withdraw money from the contract. Requests must be approved by approvers',
        style: { overflowWrap: 'break-word' },
      },
      {
        header: approvesCount,
        meta: 'Number of approvers',
        description: 'approver',
        style: { overflowWrap: 'break-word' },
      },
      {
        header: web3.utils.fromWei(balance, 'ether'),
        meta: 'Campaign Balance',
        description: 'the balnce of campaign',
        style: { overflowWrap: 'break-word' },
      },
    ]
    return <Card.Group items={items} />
  }
  render() {
    return (
      <Layout>
        <h3>Campaign Show</h3>
        <Grid>
          <Grid.Row>
            <Grid.Column width={10}>{this.renderCards()}</Grid.Column>
            <Grid.Column width={6}>
              <ContributeForm address={this.props.address} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={12}>
              <Link route={`/campaigns/${this.props.address}/requests`}>
                <a>
                  <Button primary>View Requests</Button>
                </a>
              </Link>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Layout>
    )
  }
}

export default CampaignShow
