
 
import { useState } from "react"; 
const State=()=>{ 
    const[num1,setNum1]=useState(100); 
    const[num2,setNum2]=useState(200); 
    return( 
        <> 
  <p>{num1}</p> 
  <p>{num2}</p> 
 
        <p>{num1+num2}</p> 
        <p>{num1-num2}</p> 
        <p>{num1*num2}</p> 
        <p>{num1/num2}</p> 
 
        </> 
    ) 
 
} 
export default State;