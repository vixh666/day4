import {useState} from 'react'

export default function StateFunction() {
    const[num,setNum]=useState(0);
    const[car,setCarName]=useState("Audi");
    const change=()=>{
        setCarName("BMW");
    }
    const Incrementer=()=> setNum(num+1);
  return (
    <div>
      <h1>The count is {num}</h1>
      <button onClick={Incrementer}>Incrementer</button>
        <h1>The car is {car}</h1>
      <button onClick={change}>NameChange</button>
    </div>
  )
}