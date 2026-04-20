import { useCallback, useState } from "react";
import Count from "./Count";
function ParentDemo()
{

    var[age,setAge]=useState(20);
    var[salary,setSalary]=useState(50000);
    // var increaseAge=()=>{
    //     setAge(age+1);
    // }
    // var increaseSalary=()=>{
    //     setSalary(salary+1000);
    // }

    var increaseAge=useCallback(()=>{
        setAge(age+1)},[age]);
        
    var increaseSalary=useCallback(()=>{
        setSalary(salary+1000);
    },[salary]);

return(<div>
    <Count text="age" count={age}/>
    <button onClick={increaseAge}>increaseAge</button>
    <button onClick={increaseSalary}>increaseSalary</button>
    <Count text="salary" count={salary}/>
</div>)

}
export default ParentDemo;