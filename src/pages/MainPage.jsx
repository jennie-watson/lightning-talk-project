import React, { Component } from "react"
import { Link } from "react-router-dom"
// import { Redirect } from "react-router-dom"
import logo from "../images/logo.png"

// Google Login
// import GoogleLogin from "react-google-login"
// import { PostData } from "../services/PostData"
// import Form from "./Form"

// Styles
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import { Container } from "@material-ui/core"
import "../styles/App.css"

const theme = createMuiTheme()

// class MainPage extends Component {
  // constructor(props){
  //   super(props)
  //   this.state = {
  //     isSignedIn: false
  //   }
  // }

  // onChange = updatedValue => {
  //   this.setState({
  //     fields: {
  //       ...this.state.fields,
  //       ...updatedValue
  //     }
  //   })
  // }

  // Google sign in
  // componentDidMount() {

  //   const successCallback = this.onSuccess.bind(this)

  //   window.gapi.load("auth2", () => {
  //     this.auth2 = gapi.auth2.init({
  //       client_id: "475799615416-r11q3cgev1t6sp3jsli21vugnembs7qt.apps.googleusercontent.com",
  //     })

  //     this.auth2.then(() => {
  //       console.log("on init")
  //       this.setState({
  //         isSignedIn: this.auth2.isSignedIn.get(),
  //       })
  //     })
  //   },    

  //   window.gapi.load("signin2", function() {
  //     // render a sign in button
  //     // using this method will show Signed In if the user is already signed in
  //     var opts = {
  //       width: 200,
  //       height: 50,
  //       onSuccess: this.onSuccess.bind(this),
  //     }
  //     gapi.signin2.render("loginButton", opts)
  //   }),

  //   onSuccess() {
  //     this.setState({
  //       isSignedIn: true,
  //       err: null
  //     })
  //   }

  //   onLoginFailed(err)
  //     this.setState({
  //       isSignedIn: false,
  //       error: err,
  //     })

  //   getContent()
  //     if (this.state.isSignedIn) {
  //       return <p>hello user, you're signed in</p>
  //       } else {
  //       return
  //         <div>
  //           <p>You are not signed in. Click here to sign in.</p>
  //           <button id="loginButton">Login with Google</button>
  //         </div>
  // Google sign in ends
  

  class MainPage extends Component {

    onChange = updatedValue => {
      this.setState({
        fields: {
          ...this.state.fields,
          ...updatedValue
        }
      })
    }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
          <div className="App">
            <header className="App-header">
            <Container maxWidth="sm">
              <img src={logo} className="logo" alt="logo" />
              <h1 className="main-header">L<span>&#x26a1;</span>ghtning Talks</h1>
              <p>
              Lightning Talks are brief, 5-10 minute presentations that focus on a single topic, example, idea, project, or technique. Lightning Talks do not attempt to cover all aspects of their subject matter, but present one facet of the idea clearly and succinctly.
              </p>
            </Container>
                {/* {this.getContent()} */}
              <Link to="/login" className="Login-link">Login Here</Link>
              <Link to="/form" className="Form-link">Submit your idea here</Link>
              <Link to="/table" className="Table-link">See the submissions here</Link>
              </header>
          </div>
      </MuiThemeProvider>
    )
  }
}

export default MainPage