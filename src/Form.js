import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

export default class Form extends React.Component {
  state = {
    email: '',
    topic: '',
    description: '',
  }

change = (e) => {
  this.props.onChange({ [e.target.name]: e.target.value })
  this.setState({
    [e.target.name]: e.target.value
  })
}

onSubmit = (e) => {
  e.preventDefault()
  // this.props.onSubmit(this.state)
  this.setState({
    email: '',
    topic: '',
    description: '',
  })
  this.props.onChange({
    email: '',
    topic: '',
    description: '',
  })
}

render() {
  return (
    <form>
      <TextField
        type='email'
        hinttext="Email"
        floatinglabeltext="Email"
        value={this.state.email} 
        onChange={e => this.change(e)}
        floatinglabelfixed="true"
      />
      <br />
      <TextField
        hinttext="Topic"
        floatinglabeltext="Topic"
        value={this.state.topic} 
        onChange={e => this.change(e)}
        floatinglabelfixed="true"
      />
      <br />
      <TextField
        hinttext="Description"
        floatinglabeltext="Description"
        value={this.state.description} 
        onChange={e => this.change(e)}
        floatinglabelfixed="true"
      />
      <br />
      <Button variant="contained" color="primary" label="Submit" onClick={e => this.onSubmit(e)} primary="true">
        Submit
      </Button>
      </form>
    )
  }
}
