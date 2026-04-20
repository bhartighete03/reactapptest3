function Test()
{
const user ={name:"Rahul",age:21,phone:"899765438",email:"rahul@gmail.com"};
var {name,age,phone,email}=user;{/* destructuring  */}
// var show =()=>{
//     alert("Hello");
// }
const handleChange=(event)=>{
        console.log(event.target.value);
}
return (<>
        <h3>{user.name}-----{user.age}</h3>
        <h4>{name}---{age}----{phone}----{email}</h4>
        {/* <button onClick={show}>Click me</button> */}
        <button onClick={()=>alert("Hello Class")} style={{width:"100px"}}>Click me</button>

        <input id="uname" onChange={handleChange}/>
        </>)

}
export default Test;