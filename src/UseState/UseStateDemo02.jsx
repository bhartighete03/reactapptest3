import { useState } from "react";

function UseStateDemo02()
{
    var[name,setName]=useState("Prasad");
    var changeName=()=>{
        setName("Yash"); 
    
    }
    return (
        <>
        <h3>Name is {name}</h3>
        <button onClick={changeName}>Change Name</button>
        </>
    )
}
export default UseStateDemo02;