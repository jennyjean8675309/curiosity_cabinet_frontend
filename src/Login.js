import React, { Component } from 'react'

class Login extends Component {
  constructor(){
    super()
    this.state = {
      username: '',
      password: ''
    }
  }

  handleChange = (e) =>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitLogin = (e) =>{
    fetch('http://localhost:3000/api/v1/login', {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    }).then(response => response.json())
    .then(data => {
      if (data.error) {
        alert('Incorrect username/password combination')
      } else {
          console.log(data)
          this.props.setCurrentUser(data.user_info)
          localStorage.setItem('token', data.token)
      }
    })
  }

  render(){
    return (
      <div className="ui inverted segment">
        <div className="ui inverted form">
          <div className="two fields">
            <div className="field">
              <label>Username</label>
              <input placeholder="Username" name="username" type="text" onChange={(e) => this.handleChange(e)} value={this.state.username} />
            </div>
            <div className="field">
              <label>Password</label>
              <input placeholder="Password" name="password" type="password" onChange={(e) => this.handleChange(e)} value={this.state.password} />
            </div>
          </div>
          <div onClick={(e) => this.submitLogin(e)} className="ui submit button">Submit</div>
        </div>
      </div>
    )
  }
}

export default Login
