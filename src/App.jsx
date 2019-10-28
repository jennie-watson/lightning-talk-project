import React, { Component } from "react"
import { 
  BrowserRouter as Router, 
  Route, 
  Switch,  
  Redirect 
} from "react-router-dom"

// Pages
import MainPage from "./pages/MainPage"
import Form from "./pages/Form"
import Login from "./pages/Login"
import Table from "./pages/Table"
import NotFoundPage from "./pages/NotFoundPage"

// Google Sign In
// function NotSignedIn() {
//   return (
//     <div>
//       <p>You are not signed in. Click here to sign in.</p>
//       <button id="loginButton">Login with Google</button>
//     </div>
//   )
// }

// function Members() {
//   return (
//     <p>hello user, you're signed in </p>
//   )
// }

class App extends Component {
  state = {
    data: null
  }

  componentDidMount() {
    // Call our fetch function below once the component mounts
  this.callBackendAPI()
    .then(res => this.setState({ data: res.express }))
    .catch(err => console.log(err));
}
  // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
callBackendAPI = async () => {
  const response = await fetch('/express_backend');
  const body = await response.json();

  if (response.status !== 200) {
    throw Error(body.message) 
  }
  return body;
};

//   constructor(props) {
//     super(props);
//     this.state = {
//       isSignedIn: false,
//     }
//   }
//   componentDidMount() {
//     // window.gapi.load('auth2', () => {
//     //   this.auth2 = gapi.auth2.init({
//     //     client_id: '260896681708-o8bddcaipuisksuvb5u805vokq0fg2hc.apps.googleusercontent.com',
//       // })
//       this.auth2.attachClickHandler(document.querySelector('#loginButton'), {}, this.onLoginSuccessful.bind(this))
//       this.auth2.then(() => {
//         console.log('on init');
//         this.setState({
//           isSignedIn: this.auth2.isSignedIn.get(),
//         });
//       });
//     // });    
//   }
//   onLoginSuccessful() {
//     this.setState({
//       isSignedIn: true,
//       err: null
//     })
//   }
//   onLoginFailed(err) {
//     this.setState({
//       isSignedIn: false,
//       error: err,
//     })
//   }
//   getContent() {
//     if (this.state.isSignedIn) {
//       return Members
//     } else {
//       return NotSignedIn
//     }
    
//   }
//   requiresLogin(props, Component) {
//     const promise = new Promise((resolve, reject) => {
//       // window.gapi.load('auth2', () => {
//       //   this.auth2 = gapi.auth2.init({
//       //     client_id: '260896681708-o8bddcaipuisksuvb5u805vokq0fg2hc.apps.googleusercontent.com',
//         })
  
//         this.auth2.then(() => {
//           return resolve(this.auth2.isSignedIn.get() ? <Component {...props}/> : <div>Need to login</div>)
//         })
//       // })
//   //   }).then(component => {
//   //     return component
//   //   })    
//   // }

  render() {
    return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/form" component={Form} />
        <Route path="/login" component={Login} />
        <Route path="/table" component={Table} />
        {/* <Route path="/members" render={this.requiresLogin.bind(this, Members)}/>
        <Route path="/" component={NotSignedIn}/> */}
        <Route exact path="/404" component={NotFoundPage} />
        <Redirect to="/404" />
        {/* // Render the newly fetched data inside of this.state.data  */}
        <p className="App-intro">{this.state.data}</p>
      </Switch>
    </Router>
    )
  }
}

export default App
