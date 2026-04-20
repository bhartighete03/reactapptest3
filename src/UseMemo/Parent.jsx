import { useState } from "react";
import Count from "../WithoutMemo/Count";
function Parent()
{
var[age,setAge]=useState(20)
var[salary,setSalary]=useState(50000);
var increaseAge=()=>{
    setAge(age+1);
}
var increaseSalary=()=>
    {setSalary(salary+1000)};

    return(<div>

   
     <button onClick={increaseAge}>Increase Age</button>
    <Count text="Age" count={age}></Count>  
    
    <button onClick={increaseSalary}>Increase Salary</button>
    <Count text="Salary" count={salary}></Count>
    </div>)
}
export default Parent;