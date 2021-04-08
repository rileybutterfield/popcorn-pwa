import React from "react"
import {Link} from 'react-router-dom'

class Welcome extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div>
        <h1>Popcorn.</h1>
        <h3>Find a movie match.</h3>
        <Link to="/login">
          <button>Log in</button>
          </Link>
        <button>Register</button>
      </div>
    )
  }
}

export default Welcome;
