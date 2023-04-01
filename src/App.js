import React from "react";
import "./App.css"
import Box from "./Components/Box";
import { useState } from "react";

const choice = {
  rock:{
    name: "Rock",
    img:"https://www.thoughtco.com/thmb/Uh06xuGPA6HKNbaxpNsOjR7CjPY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/rhyolite-1057171452-5c911d4b46e0fb000187a397.jpg"
  },
  scissors:{
    name:"Scissors",
    img:"https://ae01.alicdn.com/kf/Sa672725d1b54459886a076e4d0a3f7169/8-Multipurpose-Scissor-Stainless-Steel-Sharp-Scissors-for-Office-Home-General-Use-High-Middle-School-Classroom.jpg"
  },
  paper:{
    name:"Paper",
    img:"https://m.economictimes.com/thumb/msid-61941670,width-1200,height-900,resizemode-4,imgsize-25928/better-valuations-of-paper-companies-just-a-matter-of-time.jpg"
  }
}

function App() {
  const [userSelect, setUserSelect] = useState(null)
  const [computerSelect, setComputerSelect] = useState(null)
  const [result, setResult] = useState("")


  const play = (userchioce) => {
    setUserSelect(choice[userchioce])
    //컴퓨터
    let finalcomputerarray = comNum()
    setComputerSelect(finalcomputerarray)
    //결과
    setResult(Judgment(choice[userchioce],finalcomputerarray)) 
    //state의 값은 return이 시작될때 바뀌므로 여기서 state의 값은 ("")이다.
  }


  
  
 

  

  const Judgment = (user, computer) => {
    if(user.name === computer.name) 
      return "tie"
    
    else if(user.name === "Rock") 
      return computer.name === "Scissors" ? "win" : "lose"
    
    else if(user.name === "Scissors") 
      return computer.name === "Rock" ? "lose" : "win"
    
    else if(user.name === "Paper") 
      return computer.name === "Rock" ? "win" : "lose"
  }


  const comNum = () => {
    let random = Math.floor(Math.random() * 3)
    let arraychoice = Object.keys(choice)
    let itemarray = arraychoice[random]
    return choice[itemarray]
  }

  return (
    <div>
      <div className="either">
        <Box title="you" item={userSelect} result={result}/>
        <Box title="computer" item={computerSelect} result={result} />
      </div>
      <div className="either">
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
