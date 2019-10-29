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
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
}

callAPI() {
    fetch("http://localhost:9000/testAPI")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
}

componentDidMount() {
    this.callAPI();
}

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
          <p className="App-intro">;{this.state.apiResponse}</p>
        </Switch>
      </Router>
    )
  }
}

export default App
