import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class NewAccountForm extends Component {
  render(){
    if (this.props.redirectToCabinet) {
      return <Redirect to={`/cabinets/${this.props.newCabinetId}`}/>
    }

    return (
    <form>
      <div className="ui inverted segment account-form">
        <div className="ui inverted form">
          <div className="fields">
            <div className="four wide field">
              <label>First Name</label>
              <input placeholder="First Name" type="text"></input>
            </div>
            <div className="four wide field">
              <label>Last Name</label>
              <input placeholder="Last Name" type="text"></input>
            </div>
          </div>
          <div className="fields">
            <div className="ten wide field">
              <label>Email</label>
              <input placeholder="Email" type="text"></input>
            </div>
          </div>
          <div className="fields">
            <div className="four wide field">
              <label>Username</label>
              <input placeholder="Username" type="text"></input>
            </div>
            <div className="four wide field">
              <label>Password</label>
              <input placeholder="password" type="password"></input>
            </div>
          </div>
          <div className="fields">
            <div className="four wide field">
              <label>Cabinet Name</label>
              <input placeholder="Cabinet Name" type="text"></input>
            </div>
          </div>
          </div>
            <div className="ui submit button" onClick={(e) => {
                this.props.createAccount(e)
            }}>Submit</div>
        </div>
      </form>
    )}
}

export default NewAccountForm
