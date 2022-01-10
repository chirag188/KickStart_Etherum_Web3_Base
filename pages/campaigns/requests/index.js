import React, { Component } from 'react'
import { Button, Table } from 'semantic-ui-react'
import { Link } from '../../../routes'
import Layout from '../../../components/Layout'
import Campaign from '../../../Ethereum/campaign'
import web3 from '../../../Ethereum/web3'
class RequestIndex extends Component {
  static async getInitialProps(props) {
    const { address } = props.query
    const campagin = Campaign(address)
    const requestCount = await campagin.methods.getRequestsCount().call()
    const approvesCount = await campagin.methods.approvesCount().call()

    const requests = await Promise.all(
      Array(Number(requestCount))
        .fill(0)
        .map((element, index) => {
          return campagin.methods.requests(index).call()
        }),
    )
    return { address, requests, requestCount, approvesCount }
  }

  onApprove = async (index) => {
    const campagin = Campaign(this.props.address)
    const accounts = await web3.eth.getAccounts()

    await campagin.methods.approveRequest(index).send({ from: accounts[0] })
  }
  onFinalize = async (index) => {
    const campagin = Campaign(this.props.address)
    const accounts = await web3.eth.getAccounts()

    await campagin.methods.finalizeRequest(index).send({ from: accounts[0] })
  }
  renderRows() {
    return this.props.requests.map((request, index) => {
      return (
        <Table.Row
          disabled={request.complete}
          positive={
            request.approvalCount > this.props.approvesCount / 2 &&
            !request.complete
          }
        >
          <Table.Cell>{index + 1}</Table.Cell>
          <Table.Cell>{request.description}</Table.Cell>
          <Table.Cell>{web3.utils.fromWei(request.value, 'ether')}</Table.Cell>
          <Table.Cell>{request.recipient}</Table.Cell>
          <Table.Cell>
            {request.approvalCount} / {this.props.approvesCount}
          </Table.Cell>
          <Table.Cell>
            {!request.complete ? (
              <Button color="green" basic onClick={() => this.onApprove(index)}>
                Approver
              </Button>
            ) : null}
          </Table.Cell>
          <Table.Cell>
            {!request.complete ? (
              <Button color="teal" basic onClick={() => this.onFinalize(index)}>
                Finalize
              </Button>
            ) : null}
          </Table.Cell>
        </Table.Row>
      )
    })
  }

  render() {
    const { Header, Row, HeaderCell, Body } = Table
    return (
      <Layout>
        <h3>Requests</h3>
        <Link route={`/campaigns/${this.props.address}/requests/new`}>
          <a>
            <Button primary floated="right" style={{ marginBottom: 10 }}>
              Add Request
            </Button>
          </a>
        </Link>
        <Table>
          <Header>
            <Row>
              <HeaderCell>ID</HeaderCell>
              <HeaderCell>Description</HeaderCell>
              <HeaderCell>Amount</HeaderCell>
              <HeaderCell>Recipient</HeaderCell>
              <HeaderCell>Approval Count</HeaderCell>
              <HeaderCell>Approve</HeaderCell>
              <HeaderCell>Finalize</HeaderCell>
            </Row>
          </Header>
          <Body>{this.renderRows()}</Body>
        </Table>
        <div>Found {this.props.requestCount} requests</div>
      </Layout>
    )
  }
}
export default RequestIndex
