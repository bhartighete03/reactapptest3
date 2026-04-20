function FruitList()
{
const fruits=["Apple","Banana","Chiku","Graps"];
return(
    <>
    <ul>
        {fruits.map((fruit)=>(
        <li>{fruit}</li>   
        ))}
    </ul>
    </>
)

}
export default FruitList;