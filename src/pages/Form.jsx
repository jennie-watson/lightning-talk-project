import React from "react"
// import Form from "./Form"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import "../styles/App.css"
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"

const theme = createMuiTheme()

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      emailError: "",
      topic: "",
      topicError: "",
      description: "",
      descriptionError: "",
      fields: {}
    }
  }

  onChange = updatedValue => {
    this.setState({
      fields: {
        ...this.state.fields,
        ...updatedValue
      }
    })
  }

  onChange = (fields) => {
    this.onChange(fields)
  }

  handleChange = event => {
    this.setState({ [event.target.value]: event.target.value });
  }

  change = e => {
    this.props.onChange({ [e.target.name]: e.target.value })
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  validate = () => {
    let isError = false
    const errors = {
      emailError: "",
      topicError: "",
      descriptionError: ""
    }

    if (this.state.email.indexOf("@") === -1) {
      isError = true
      errors.emailError = "Requires valid email"
    }

    if (this.state.email.length > 255) {
      isError = true
      errors.topicError = "Email needs to be less than 255 characters long"
    }

    if (this.state.topic.length > 80) {
      isError = true
      errors.topicError = "Topic needs to be less than 80 characters long"
    }

    this.setState({
      ...this.state,
      ...errors
    })

    return isError
  }

  onSubmit = e => {
    e.preventDefault()
    // this.props.onSubmit(this.state)
    const err = this.validate()
    if (!err) {
      // clear form
      this.setState({
        email: "",
        emailError: "",
        topic: "",
        topicError: "",
        description: "",
        descriptionError: ""
      })
      this.props.onChange({
        email: "",
        topic: "",
        description: "",
      })
    }
  }

render() {
  return (
    <MuiThemeProvider theme={theme}>
    <h1 className="form-header">Lightning Talks</h1>
      <form className="form">
        <TextField className="text-field"
          name="email"
          label="Email"
          id="outlined-multiline-static"
          margin="normal"
          variant="outlined"
          value={this.state.email} 
          onChange={this.handleChange}
          errortext={this.state.emailError}
          style={{width: "50%"}}
        />
        <br />
        <TextField
          name="topic"
          label="Topic"
          id="outlined-multiline-static"
          margin="normal"
          variant="outlined"
          value={this.state.topic} 
          onChange={this.handleChange}
          errortext={this.state.topicError}
          style={{width: "50%"}}
        />
        <br />
        <TextField
          name="description"
          label="Description"
          id="outlined-multiline-static"
          multiline
          rows="8"
          margin="normal"
          variant="outlined"
          value={this.state.description} 
          onChange={this.handleChange}
          errortext={this.state.descriptionError}
          maxLength="120" // max word length is 120
          style={{width: "50%"}}
        />
        <br />
        <Button label="submit" variant="contained" className="button" style={{width: "25%"}} onClick={e => this.onSubmit(e)} primary="true">Submit</Button>
        <p>
          {JSON.stringify(this.state.fields, null, 2)}
        </p>
        </form>
      </MuiThemeProvider>
    )
  }
}

export default Form