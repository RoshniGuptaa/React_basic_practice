import React, { Component } from 'react'
//Focus on input field as soon as page loades
export default class RefsDemo extends Component {
    constructor(props){
        super(props);
           this.inputRef=React.createRef();
    }

    componentDidMount(){
        // this helps in focus on the input value
        this.inputRef.current.focus()
        console.log(this.inputRef)
    }

    clickHandler=()=>{
        alert(this.inputRef.current.value);
    }

  //   handleClick = () => {
  render() {
    return (
      <div>
        <input type='text' ref={this.inputRef}></input>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}
