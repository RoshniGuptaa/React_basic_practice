import React, { Component } from 'react'

export default class EventBind extends Component {
    constructor(props){
        super(props)

        this.state={
            message:'Hello'
        }
        this.clickHandler=this.clickHandler.bind(this);
    }

    // clickHandler(){
    //     this.setState({message:'Byee'})
    // }
    // Arrow function
    clickHandler=()=>{
        this.setState({message:'Byee'})
    }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/*1) this binding in render method ,Can be troublesome */}
        {/*<button onClick={this.clickHandler.bind(this)} >Click me!</button> */}
        {/* 2) Calling event handler in arrow function body ,Have performance implication in some scenarios*/}
        {/* <button onClick={()=>this.clickHandler()} >Click me!</button> */}
        {/* 3) Bind event handler in the constructor 
        <button onClick={this.clickHandler} >Click me!</button>*/}

        {/* 4) Use arrow function in click handler */}
        <button onClick={this.clickHandler} >Click me!</button>
      </div>
    )
  }
}
