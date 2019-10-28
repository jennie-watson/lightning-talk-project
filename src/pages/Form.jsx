import React from "react"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"

// Styles
import "../styles/App.css"
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"

const theme = createMuiTheme()

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
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
    this.setState({ [event.target.name]: event.target.value })
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
      topicError: "",
      descriptionError: ""
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
        topic: "",
        topicError: "",
        description: "",
        descriptionError: ""
      })
      this.props.onSubmit({
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
          required={true}
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
          required={true}
        />
        <br />
        <Button 
        label="submit" 
        variant="contained" 
        className="button" 
        style={{width: "25%"}} 
        onClick={e => this.onSubmit(e)} primary="true">Submit
        </Button>
        </form>
      </MuiThemeProvider>
    )
  }
}

export default Form