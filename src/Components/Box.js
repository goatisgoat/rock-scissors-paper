import React from 'react'

const Box = (props) => {
  let result ="";

  if(props.title === "computer" && props.result !== "") {
    if(props.result === "tie") {
      result = "tie"
    }else if(props.result === "win") {
      result = "lose"
    } else {result = "win"} 
  }else if(props.title === "you") {
    result = props.result
  }

  return (
    <div className={`box ${result}`}> 
      <h1>{props.title}</h1>
      <img src={props.item && props.item.img} alt=""/> 
      <h2>{result && result}</h2>
    </div>
  )
}

export default Box


