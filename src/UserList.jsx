function UserList()
{
const users=[
    {id:100,name:"Rohan",email:"rohan@gmail.com"},
    {id:101,name:"Prasad",email:"prasad@gmail.com"},
    {id:102,name:"Pratik",email:"pratik@gmail.com"}
]
return (<>
        {users.map((user)=>(
            <ul key={user.id}>
                <li>{user.id}----{user.name}----{user.email}</li>
            </ul>
        ))}
</>)
}
export default UserList