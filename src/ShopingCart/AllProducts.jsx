import { ProductsInfo } from "../Rounting/ProductsInfo";
import SingleProduct from "../ShopingCart/SingleProduct"
import { useState } from "react";
function AllProducts({cart,setCart})
{
var[result,setResult]=useState(ProductsInfo);
return (<>
    {result.map((product)=>{
       return  <SingleProduct key={product.id} product={product} cart={cart} setCart={setCart} ></SingleProduct>
    })}
</>)

}
export default AllProducts;