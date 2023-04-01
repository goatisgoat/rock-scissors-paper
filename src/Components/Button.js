import React from 'react'

const Button = (props) => {
  let randomNum = Math.floor(Math.random * 3) + 1
  const result = (props) => {
    if(props.num === randomNum) {


      }else if(props.num === 1) {
        if(randomNum - props.num === 2) {

        }else if(randomNum - props.num === 1) {

        }
      }else if(props.num === 3) {
        if(props.num - randomNum === 2) {

        }else if(props.num - randomNum === 1) {

        }
      }else if(1 < props.num < 3) {
        if(props.num > randomNum) {

        }else if(props.num < randomNum) {

        }
      }
    }

  return (
    <div>
      <button onClick={result}>{props.name}</button>
    </div>
  )
}


export default Button
