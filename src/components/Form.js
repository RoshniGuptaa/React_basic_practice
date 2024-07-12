import React, { Component } from 'react'
// Form handlinh using React states ->controlled components
export default class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:'',
         comments:'',
         topic:'react'
      }
    }
    
    handleUsername=(event)=>{
        this.setState({username :event.target.value})
       
    }

    handleCommentsChange=(event)=>{
        this.setState({comments :event.target.value})
    }
    handleTopicChange=(event)=>{
        this.setState({topic :event.target.value})
    }
    handleSubmit=(event)=>{
        event.preventDefault()
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
    }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
            <label>UserName</label>
            <input type='text' value={this.state.username} onChange={this.handleUsername}></input>
        </div>
        <div>
            <label>Comments</label>
            <textarea value={this.state.comments} onChange={this.handleCommentsChange}></textarea>
        </div>
        <div>
         <label>Topic</label>
         <select value={this.state.topic} onChange={this.handleTopicChange}>
           <option value="react">React</option>
           <option value="java">Java</option>
           <option value="js">Java Script</option>
         </select>

        </div>
        <button type='submit'>Submit</button>
      </form>
    )
  }
}
