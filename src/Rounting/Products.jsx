import { ProductsInfo } from "./ProductsInfo"
import { useState } from "react"
import SingleProduct from "./SingleProduct"
import { Link } from "react-router-dom"
function Products()
{
var [result,setResults]=useState(ProductsInfo)
return (
    <div className="container_card">
        <h3>All Product Info</h3>
        {result.map((product)=>{
            return( 
            // <SingleProduct product={product}></SingleProduct>
                // <div className="card">
                //     <h5>Id :{product.id}</h5>
                //     <h5>Name :{product.name}</h5>
                //     <h5>Price : {product.price}</h5>
                //     <img src={product.image} alt="not found" width="200px"></img>
                // </div>

                <div>
                    <h5>{product.name}</h5>
                    <Link to={`/products/${product.id}`}>Click here to view Product info</Link>
                </div>
            )
        })}
    </div>
)
}
export default Products