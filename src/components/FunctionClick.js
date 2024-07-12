import React from 'react'

export default function FunctionClick() {
    function clickHandler(){
        console.log("clicked");
    }
  return (
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  )
}
