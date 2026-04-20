function UseState01()
{
let name="Prasad";
var changeName=()=>{
    name="Yash";
    console.log(name);
}
    return (<>
    <h3>Name is : {name}</h3>
    <button onClick={changeName}>Change Name</button>
    </>)
}
export default UseState01;