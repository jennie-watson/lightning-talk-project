import React from "react"
import "../styles/App.css"
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"

const theme = createMuiTheme()

class Login extends React.Component {
  constructor(){
    super()
      this.state = {
        email: "",
        password: "",
        redirectToReferrer: false
        }
      this.login = this.login.bind(this)
      this.onChange = this.onChange.bind(this)
      }
      login() {
      //API Action Here
      }

      onChange(e){
      this.setState({[e.target.name]:e.target.value})
      }

    render() {
      return (
        <MuiThemeProvider theme={theme}>
          <div className="login">
          <h1 className="login-header">Login</h1>
          <TextField 
          label="Email"
          type="text" 
          name="username" 
          onChange={this.onChange}
          style={{width: "50%"}} 
          />
          <br />
          <TextField
          label="Password"
          type="password" 
          name="password" 
          onChange={this.onChange}
          style={{width: "50%"}}
          />
          <br />
          <br />
          <Button 
          label="Login" 
          value="Login"
          variant="contained" 
          className="button" 
          style={{width: "25%"}} 
          onClick={this.login}
          primary="true">Login
          </Button>
          </div>
        </MuiThemeProvider>
      )
    }
  }

export default Login