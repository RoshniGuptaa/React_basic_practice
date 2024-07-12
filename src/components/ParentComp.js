import React, { Component } from 'react'
import RegComp from './RegComp'
import PureC from './PureC'
import MemoComp from './MemoComp'

export default class ParentComp extends Component {
    constructor(props){
        super(props)
        this.state={
            name:"Roshni"
        }
    }

    componentDidMount(){
        setInterval(()=>
        this.setState({
            name:'Roshni'
        }),2000)
    }
  render() {
    console.log("**********Parent comp render****************")
    return (
      <div>
        <MemoComp name={this.state.name}></MemoComp>
        {/* <RegComp name={this.state.name}></RegComp>
        <PureC name={this.state.name}></PureC> */}
      </div>
    )
  }
}
