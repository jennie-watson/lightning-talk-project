import React from "react"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"

// import { createMuiTheme } from "@material-ui/core/styles"
// import styles from "../styles/App.css"

// const theme = createMuiTheme()

// class Form extends React.Component {
//   state = {
//     email: "",
//     topic: "",
//     description: "",
//   }

// change = e => {
//   this.props.onChange({ [e.target.name]: e.target.value })
//   this.setState({
//     [e.target.name]: e.target.value
//   })
// }

// onSubmit = e => {
//   e.preventDefault()
//   // this.props.onSubmit(this.state)
//   this.setState({
//     email: "",
//     topic: "",
//     description: "",
//   })
//   this.props.onChange({
//     email: "",
//     topic: "",
//     description: "",
//   })
// }

// render() {
//   return (
//     <>
//     <div className="form">
//       <h1>Lightning Talks</h1>
//     <form>
//       <TextField
//         id="outlined-multiline-static"
//         label="Email"
//         className="textField"
//         margin="normal"
//         variant="outlined"
//         value={this.state.email} 
//         onChange={e => this.change(e)}
//       />
//       <br />
//       <TextField
//         id="outlined-multiline-static"
//         label="Topic"
//         className="textField"
//         margin="normal"
//         variant="outlined"
//         value={this.state.topic} 
//         onChange={e => this.change(e)}
//       />
//       <br />
//       <TextField
//         id="outlined-multiline-static"
//         label="Description"
//         multiline
//         rows="8"
//         className="textField"
//         margin="normal"
//         variant="outlined"
//         value={this.state.description} 
//         onChange={e => this.change(e)}
//         maxLength="120" // max word length is 120
//       />
//       <br />
//       </form>
//       </div>
//       </>
//     )
//   }
// }

class Form extends React.Component {
  state = {
    email: '',
    topic: '',
    description: '',
  }
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
    <form className="form">
      {/* <h1 Lightning Talks /> // not working */}
      <br />
      <TextField
        name="email"
        label="Email"
        id="outlined-multiline-static"
        className="textField"
        margin="normal"
        variant="outlined"
        value={this.state.email} 
        onChange={e => this.change(e)}
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
      />
      <br />
      <Button variant="contained" color="primary" label="Submit" onClick={e => this.onSubmit(e)} primary="true">Submit</Button>
      </form>
    )
  }
}

export default Form