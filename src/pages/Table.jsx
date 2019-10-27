import React from 'react'

class Table extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         submissions: [
            { topic: "", description: ""},
            { topic: "", description: ""},
            { topic: "", description: ""},
         ]
      }
   }

   renderTableHeader() {
      let header = Object.keys(this.state.submissions[0])
      return header.map((key, index) => {
         return <th key={index}>{key.toUpperCase()}</th>
      })
   }

   renderTableData() {
      return this.state.submissions.map((submission, index) => {
         const { topic, description} = submission //destructuring
         return (
            <tr key={topic}>
               <td>{topic}</td>
               <td>{description}</td>
            </tr>
         )
      })
   }

   render() {
      return (
         <div>
            <h1 id='title'>Lightning Talk Submissions</h1>
            <table id='submissions'>
               <tbody>
                  <tr>{this.renderTableHeader()}</tr>
                  {this.renderTableData()}
               </tbody>
            </table>
         </div>
      )
   }
}

// ReactDOM.render(<Table />, document.getElementById('root'));

export default Table