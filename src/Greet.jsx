// name is a paremeter or argument but in react term it is a prop
//prop - it is used to pass data from parent component to child component
function Greet({name}) 
{
    return (
        <h5>Good Evening {name}</h5> )
}
export default Greet