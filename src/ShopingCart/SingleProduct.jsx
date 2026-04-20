function SingleProduct({product,cart,setCart})
{
    var addProductToCart=(product)=>{
        setCart([...cart,product]);
    }
    var removeProduct=(product)=>{ //in cart 1,2,3 remove 3 id
        var balance=cart.filter((p)=>{
            return(p.id!==product.id)//p.id!==3
        })
        setCart(balance);
    }
    return (
        <div className="card">
                    <h5>Id :{product.id}</h5>
                    <h5>Name :{product.name}</h5>
                    <h5>Price : {product.price}</h5>
                    <img src={product.image} alt="not found" width="200px"></img>
                    <button onClick={()=>{addProductToCart(product)}}>Add product to Cart</button>
 <button onClick={()=>{removeProduct(product)}}>Remove Product from cart</button>
                </div>
    )
}
export default SingleProduct