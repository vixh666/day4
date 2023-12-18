import React,{useState} from 'react'

export default function Dynamic() {
    const[x,setX]=useState(12)
  return (
    <div>
      {x>10?(<p>value greater than 10</p>): (<p>value is less than 10</p>)}
    </div>
  )
}