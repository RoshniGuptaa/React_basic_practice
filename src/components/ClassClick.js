import React, { Component } from 'react'

class ClassClick extends Component {
    clickHandler(){
        console.log(" class is clicked");
    }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler} >class clicked!</button>
      </div>
    )
  }
}

export default ClassClick
