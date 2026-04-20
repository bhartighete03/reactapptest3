import { useParams } from "react-router-dom";
import { ProductsInfo } from "./ProductsInfo";

function SingleProduct2()
{
            var {productid}=useParams();
        var item=ProductsInfo.find((p)=>{
        return p.id===parseInt(productid);
        })

    return (
        <div className="card">
                    <h5>Id :{item.id}</h5>
                    <h5>Name :{item.name}</h5>
                    <h5>Price : {item.price}</h5>
                    <img src={item.image} alt="not found" width="200px"></img>
                </div>
    )
}
export default SingleProduct2