import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
function Main()
{

    return (
    <div style={{backgroundColor:"lightgray",width:"700px",height:"500px"}}>
    
    <h3>Main Component</h3>
    <Link to="/home" className="ms">Home</Link>
    <Link to="/about" className="ms">About</Link>
    <Link to="/products" className="ms">Products</Link>
    <Link to="/allproducts" className="ms">All Products</Link>
    <Link to="/cart" className="ms">Cart</Link>
    <Outlet/>
    </div>)

}
export default Main;