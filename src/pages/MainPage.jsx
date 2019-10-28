import React, { Component } from "react"
import { Link } from "react-router-dom"
import logo from "../images/logo.png"

// Styles
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import { Container } from "@material-ui/core"
import "../styles/App.css"

const theme = createMuiTheme()

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
            <h1 className="main-header">L<span role="img" aria-label="lightning-bolt">&#x26a1;</span>ghtning Talks</h1>
            <p>
            Kia Ora and welcome to the Stuff Lightning Talks. Lightning Talks are a great way of breaking down knowledge barriers and are a great way of gaining insight into interesting topics. Please submit your idea below for the upcoming Lightning Talks.
            </p>
          </Container>
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