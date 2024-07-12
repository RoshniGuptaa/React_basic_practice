// Conditional Rendering
import React, { Component } from 'react'

export default class UserGreeting extends Component {
    constructor(props){
        super(props);
        this.state={
            isLoggedIn:true
        }
    }
  render() {
      
    //Using Short circuit approach

    return this.state.isLoggedIn && <div>Welcome Roshni</div>
    
    
    // ternary operator approach
    // return(
    //     this.state.isLoggedIn?<div>Welcome Roshni</div>:<div>Welcome Guest</div>
    // )
    // Element variable approach
    //  let message
    //  if(this.state.isLoggedIn){
    //     message=<div>Welcome Roshni</div>
    //  }
    //  else{
    //     message=<div>Welcome Guest</div>
    //  }
     
    //  return(
    //     <div>{message}</div>
    //  )

     //If -else approach
    // if(this.state.isLoggedIn){
    //     return(
    //         <div>Welcome Roshni</div>
    //     )
    // }
    // else{
    //     return(
    //         <div>Welcome Guest</div>
    //     )
    // }

    // return (
    //   <div>
    //     <div>Welcome Roshni</div> 
    //     <div>Welcome Guest</div>
    //   </div>
    // )
  }
}
