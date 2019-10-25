// import React from "react"
import React, { Component } from "react";
// import { Link } from "react-router-dom"
import Form from "./Form"

// Styles
import { createMuiTheme } from "@material-ui/core/styles"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import styles from "../styles/App.css"

import logo from "../images/logo.png"

const theme = createMuiTheme()

class MainPage extends Component {
  state = {
    fields: {}
  };

  onChange = updatedValue => {
    this.setState({
      fields: {
        ...this.state.fields,
        ...updatedValue
      }
    });
  };

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Form onChange={fields => this.onChange(fields)} />
          <p>
            {JSON.stringify(this.state.fields, null, 2)}
          </p>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default MainPage;

// class MainPage extends React.Component {
//   state = {
//     fields: {}
//   }

//   onChange = updatedValue => {
//     this.setState({ 
//       fields: {
//         ...this.state.fields,
//         ...updatedValue
//       }
//     })
//   }
  
//   render() {
//     return (
//       <MuiThemeProvider theme={theme}>
//         <div className="App">
//           <header className="App-header">
//             <img src={logo} className="logo" alt="logo" />
//             <h1>Lightning Talks</h1>
//               <p>
//                 Lightning Talks are brief, 5-10 minute presentations that focus on a
//                 single topic, example, idea, project, or technique. Lightning Talks
//                 do not attempt to cover all aspects of their subject matter, but
//                 present one facet of the idea clearly and succinctly.
//               </p>
//               <Link to="/login" className="Login-link">Login Here</Link>
//               <Link to="/form" className="Form-link">Share your idea here</Link>
//           </header>
//           <div className="Form">
//               <Form onChange={fields => this.onChange(fields)} />
//                 <p>
//                   {JSON.stringify(this.state.fields, null, 2)}
//                 </p>
//               </div>
//         </div>
//         </MuiThemeProvider>
//       )
//     }
//   }
  
// export default MainPage