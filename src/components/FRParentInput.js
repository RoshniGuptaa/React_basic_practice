import React, { Component } from 'react'
import FRInput from './FRInput'

export default class FRParentInput extends Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef()
  }
  clickHandler=()=>{
    this.inputRef.current.focus()  // Focus on the input field on button click. 
  }
  render() {
    return (
      <div>
        <FRInput ref={this.inputRef}></FRInput>
        <button onClick={this.clickHandler}>Focus</button>
      </div>
    )
  }
}
