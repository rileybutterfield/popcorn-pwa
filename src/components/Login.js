import React from "react"
import axios from "axios"

class Login extends React.Component {
  constructor() {
    super()
    this.state = {
        email: '',
        password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    console.log(this.state)
    this.setState({[e.target.name]: e.target.value,})
  }

  async handleSubmit(e) {
    e.preventDefault()
    const loggedIn = await axios.post('http://popcorn-backend.herokuapp.com/auth/login/', this.state)
    console.log("loggedInSuccess", loggedIn)
  }

  render() {
    return (
      <form>
        <input
        placeholder="Email"
        name='email'
        onChange={this.handleChange}
        value={this.state.email}
        ></input>
        <input
        placeholder="Password"
        name='password'
        onChange={this.handleChange}
        value={this.state.password}
        ></input>
        <button
        type="submit"
        onClick={this.handleSubmit}
        >Log In</button>
      </form>
    )
  }
}

export default Login;
