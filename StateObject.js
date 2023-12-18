import React from 'react'

export default function StateObj() {
    const[college,setCollege]=React.useState({cid:1,cname:"sri",year:2023})
    const change=()=>{
        setCollege((a)=>{return{...a,year:2024}})
    }
  return (
    <div>
      <h1>College id is {college.cid}</h1>
      <h1>Name is : {college.cname}</h1>
      <h1>year is : {college.year}</h1>
      <button onClick={change}>ChangeYear</button>
    </div>
  )
}