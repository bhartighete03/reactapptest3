import { useReducer } from "react";

function ReducerCounter()
{

        var reducer=(count,action)=>{
            console.log(count,"Count");
            console.log(action,"action");
            switch(action)
            {
                case "Add":return count+1;
                case "Sub" :return count-1;
            }
        }
    var [count,dispatchCount]=useReducer(reducer,0);
    console.log(useReducer);
    return (<>
    <h3>{count}</h3>
    <button onClick={()=>{dispatchCount("Add")}}>+</button>
    <button onClick={()=>{dispatchCount("Sub")}}>-</button>
    </>)
}
export default ReducerCounter;