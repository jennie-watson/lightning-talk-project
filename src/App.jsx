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

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/form" component={Form} />
          <Route path="/login" component={Login} />
          <Route path="/table" component={Table} />
          <Route exact path="/404" component={NotFoundPage} />
          <Redirect to="/404" />
          <p className="App-intro">{this.state.data}</p>
        </Switch>
      </Router>
    )
  }
}

export default App
