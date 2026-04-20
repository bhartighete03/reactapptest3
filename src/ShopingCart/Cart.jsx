import SingleProduct from "../ShopingCart/SingleProduct"

function Cart({cart,setCart})
{
    return (<>
    {cart.map((product)=>{

        return <SingleProduct      key={product.id} product={product} cart={cart} setCart={setCart}></SingleProduct>
    })}
    </>)
}
export default Cart;