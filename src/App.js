import React, { Component } from "react"
import { createMuiTheme } from '@material-ui/core/styles';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import logo2 from "./logo2.png"
import "./App.css"
import Form from "./Form"

const theme = createMuiTheme();

class App extends Component {
  state = {
    fields: {}
  }

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
            <img src={logo2} className="stuff-logo" alt="logo" />
            <h1>Lightning Talks</h1>
              <p>
                Lightning Talks are brief, 5-10 minute presentations that focus on a
                single topic, example, idea, project, or technique. Lightning Talks
                do not attempt to cover all aspects of their subject matter, but
                present one facet of the idea clearly and succinctly.
              </p>
              <a
                className="App-link"
                href='Form'
                rel="noopener noreferrer"
              >
                Share your idea here
              </a>
              <div className="Form">
              <Form onChange={fields => this.onChange(fields)} />
                <p>
                  {JSON.stringify(this.state.fields, null, 2)}
                </p>
              </div>
          </header>
        </div>
        </MuiThemeProvider>
      )
    }
    }

export default App
