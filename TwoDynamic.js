import React, {useState} from 'react'

export default function TwoWay() {
    const[name,setName]=useState("");
    const changeName=(event)=>{setName(event.target.value)}
  return (
    <div>
      TwoWay Binding
      <input onChange={changeName} value={name}></input>
      <p>the name is {name}</p>
    </div>
  )
}