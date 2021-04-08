import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import Routes from "./routes"
// function App() {
//   console.log("App executed")
//   //use below when loading screen and login
//   // const [user, setUser] = useState();
//   // const [isReady, setIsReady] = useState(false);


//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React!
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends React.Component {
  constructor() {
    super()
  }


  async componentDidMount() {
    const usersCall = await axios.get('http://popcorn-backend.herokuapp.com/api/likes/')
    const users = usersCall.data
    console.log(users)
  }
  render() {
    return (
      <div>
      {/* <Navbar /> */}
      <Routes />
    </div>
    )
  }
}

export default App;
