import { useState } from "react";
function ControlInputForm()
{
    var[name,setName]=useState();
    var[email,setEmail]=useState();
    var[age,setAge]=useState();

    var[user,setUser]=useState([]);
    
    var changeName=(event)=>{
     console.log(event.target.value)
        setName(event.target.value);
    }

    var changeEmail=(event)=>{
     console.log(event.target.value)
        setEmail(event.target.value);
    }

    var changeAge=(event)=>{
    console.log(event.target.value)
        setAge(event.target.value);
    }
    var handleSubmit=(event)=>{
        event.preventDefault();
        var person={name,email,age};
        setUser((p)=>{return[...p,person]});
        setName("");
        setEmail("");
        setAge("");

    }
return (<>
    <form onSubmit={handleSubmit}>
        <label>User Name</label>
        <input type="text" name="name" onChange={changeName} value={name}/><br/>

        <label>User Email</label><br/>
        <input type="email" name="email"  onChange={changeEmail} value={email}/><br/>

        <label>User Age</label><br/>
        <input type="number" name="age" onChange={changeAge} value={age}/><br/>
        <input type="submit" value="Register"/>
    </form>
    <h3>{name}---{email}---{age}</h3>
    {user.map((u)=>{
        return (<h3>{u.name}---{u.email}---{u.age}</h3>)
    })}
</>
)
}
export default ControlInputForm;