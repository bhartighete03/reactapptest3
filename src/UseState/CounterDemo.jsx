import { useState } from "react";
function CounterDemo()
{
    var[count,setCount]=useState(0);
    var increment=()=>{
        //count=count+1;
        setCount(count++);

    }
return (<>
<h3>Count is :{count}</h3>
<button onClick={increment}>+</button>
</>)
}
export default CounterDemo