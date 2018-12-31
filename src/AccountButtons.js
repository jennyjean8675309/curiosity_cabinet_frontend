import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class AccountButtons extends Component {
  render(){
    return <div>
      <Link to="/login"><button>Sign In</button></Link>
      <br></br>
      <br></br>
      <br></br>
      <p>Or</p>
      <br></br>
      <Link to="/new_account"><button>Create a New Account</button></Link>
    </div>
  }
}

export default AccountButtons
