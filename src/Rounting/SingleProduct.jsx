function SingleProduct({product})
{

    return (
        <div className="card">
                    <h5>Id :{product.id}</h5>
                    <h5>Name :{product.name}</h5>
                    <h5>Price : {product.price}</h5>
                    <img src={product.image} alt="not found" width="200px"></img>
                </div>
    )
}
export default SingleProduct