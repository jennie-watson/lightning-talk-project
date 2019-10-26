import React from "react"
import Form from "./Form"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import "../styles/App.css"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"

class Forms extends React.Component {
  state = {
    email: "",
    topic: "",
    description: "",
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

  // FORM BREAKING AND NOT RENDERING HERE
  // <Form onChange={fields => this.onChange(fields)} /> 

  change = e => {
    this.props.onChange({ [e.target.name]: e.target.value })
    this.setState({
      [e.target.name]: e.target.value
    })
  }

onSubmit = e => {
  e.preventDefault()
  // this.props.onSubmit(this.state)
  this.setState({
    email: "",
    topic: "",
    description: "",
  })

  this.props.onChange({
    email: "",
    topic: "",
    description: "",
  })
}

render() {
  return (
    <MuiThemeProvider>
      <form className="form">
        <TextField
          name="email"
          label="Email"
          id="outlined-multiline-static"
          className="textField"
          margin="normal"
          variant="outlined"
          value={this.state.email} 
          onChange={e => this.change(e)}
          style={{width: "50%"}}
        />
        <br />
        <TextField
          name="topic"
          label="Topic"
          id="outlined-multiline-static"
          className="textField"
          margin="normal"
          variant="outlined"
          value={this.state.topic} 
          onChange={e => this.change(e)}
          style={{width: "50%"}}
        />
        <br />
        <TextField
          name="description"
          label="Description"
          id="outlined-multiline-static"
          multiline
          rows="8"
          className="textField"
          margin="normal"
          variant="outlined"
          value={this.state.description} 
          onChange={e => this.change(e)}
          maxLength="120" // max word length is 120
          style={{width: "50%"}}
        />
        <br />
        <Button variant="contained" color="primary" style={{width: "25%"}} onClick={e => this.onSubmit(e)} primary="true">Submit</Button>
        <p>
          {JSON.stringify(this.state.fields, null, 2)}
        </p>
        </form>
      </MuiThemeProvider>
    )
  }
}

export default Forms