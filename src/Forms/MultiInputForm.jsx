import { useState } from "react";
function MultiInputForm()
{
var[user,setUser]=useState({name:"",email:"",pass:"",age:""});
var[people,setPeople]=useState([]);
var changeData =(event)=>
{
    var key=event.target.name;
    var value=event.target.value;
    setUser({...user,[key]:value});
}
var handleSubmit=(event)=>{
    event.preventDefault();
    if(user.name&&user.email&&user.age&&user.pass)
    {
        setPeople((p)=>{return [...p,user]});

    }
    setUser({name:"",email:"",pass:"",age:""})

}
    return(<div>

        <form onSubmit={handleSubmit}>
        <label>User Name</label>
        <input type="text" name="name" onChange={changeData} value={user.name}/><br/>

        <label>User Email</label><br/>
        <input type="email" name="email"  onChange={changeData} value={user.email}/><br/>

        <label>User Password</label><br/>
        <input type="password" name="pass"  onChange={changeData} value={user.pass}/><br/>
        <label>User Age</label><br/>
        <input type="number" name="age" onChange={changeData} value={user.age}/><br/>
        <input type="submit" value="Register"/>
    </form>
    <h3>{user.name}---{user.email}---{user.pass}---{user.age}</h3>
    {people.map((p)=>{
        return (<div><h5>{p.name}-{p.email}-{p.age}-{p.pass}</h5></div>)
    })}
    </div>)
}
export default MultiInputForm