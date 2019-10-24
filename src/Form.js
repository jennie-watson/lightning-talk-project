import React from 'react'

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
      <input
        name='email' 
        placeholder='Email address' 
        value={this.state.email} 
        onChange={e => this.change(e)}
      />
      <br />
      <input 
        name='topic'
        placeholder='Topic' 
        value={this.state.topic} 
        onChange={e => this.change(e)}
      />
      <br />
      <input 
        name='description'
        placeholder='Description' 
        value={this.state.description} 
        onChange={e => this.change(e)}
      />
      <br />
      <button onClick={e => this.onSubmit(e)}>Submit</button>
      </form>
    )
  }
}
