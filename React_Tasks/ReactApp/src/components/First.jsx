import React from 'react'
import { useState } from 'react'

export default function First() {
        const[num1,setNum1]=useState(100);
        const[num2,setNum2]=useState(200);
    
  return (
    <div>
      <h1>First Component is here</h1>
      <p>{num1}</p>
      <p>{num2}</p>
      <p>{num1+num2}</p>
      <p>{num1-num2}</p>
      <p>{num1*num2}</p>
      <p>{num1/num2}</p>
    </div>
  )
}
