import React, { Component } from 'react'
import { Button, Form, Input, Message } from 'semantic-ui-react'
import Campaign from '../Ethereum/campaign'
import web3 from '../Ethereum/web3'
import { Router } from '../routes'

class ContributeForm extends Component {
  state = {
    value: '',
    errormessage: '',
    loading: false,
  }
  onSubmit = async (event) => {
    event.preventDefault()
    this.setState({ loading: true })
    this.setState({ errormessage: '' })

    const campagin = Campaign(this.props.address)
    try {
      const accounts = await web3.eth.getAccounts()
      await campagin.methods.contribute().send({
        from: accounts[0],
        value: web3.utils.toWei(this.state.value, 'ether'),
      })
      this.setState({ loading: false, value: '' })
      Router.replaceRoute(`/campaigns/${this.props.address}`)
    } catch (err) {
      this.setState({ loading: false })
      this.setState({ errormessage: err.message })
    }
  }
  render() {
    return (
      <Form onSubmit={this.onSubmit} error={!!this.state.errormessage}>
        <Form.Field>
          <label>Amount to contribute</label>
          <Input
            label="ether"
            labelPosition="right"
            value={this.state.value}
            onChange={(e) => this.setState({ value: e.target.value })}
          />
        </Form.Field>
        <Message
          error
          header="Oops!"
          content={this.state.errormessage}
        ></Message>
        <Button primary loading={this.state.loading}>
          Contribute!
        </Button>
      </Form>
    )
  }
}

export default ContributeForm
