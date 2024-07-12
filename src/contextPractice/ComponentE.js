import React, { Component } from 'react'
import ComponentF from './ComponentF'
import userContext from './userContext'

export default class ComponentE extends Component {
  render() {
    return (
        <div>
       Compontnt E context {this.context}
<ComponentF></ComponentF>
        </div>
      
    )
  }
}
ComponentE.contextType=userContext
//Context type is used only with class component
//it can only be used with one component