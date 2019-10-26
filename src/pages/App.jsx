import React, { Component } from "react"
import { 
  BrowserRouter as Router, 
  Route, 
  Switch,  
  Redirect 
} from "react-router-dom"

// Pages
import MainPage from "./MainPage"
import Form from "./Form"
// import Login from "./Login"
// import Submissions from "./Submissions"
import NotFoundPage from "./NotFoundPage"

class App extends Component {
  render() {
    return (
    <Router>
      <Switch>
      <Route exact path="/" component={MainPage} />
      <Route path="/form" component={Form} />
      {/* <Route path="/login" component={Login} /> */}
      {/* <Route path="/submissions" component={Submissions} /> */}
      <Route exact path="/404" component={NotFoundPage} />
      <Redirect to="/404" />
      </Switch>
    </Router>
    )
  }
}

export default App
