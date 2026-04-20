import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import FruitList from './FruitList'
import UserList from './UserList'
import Card from './Card'
import Test from './Test'
import Greet from './Greet'
import GreetUser from './GreetUser'
import Dashboard from './Dashboard'
import Login from './Login'
import UseState01 from './UseState/UseState01'
import UseStateDemo02 from './UseState/UseStateDemo02'
import CounterDemo from './UseState/CounterDemo'
import UseEffectDemo1 from './UseEffect/UseEffectDemo1'
import UseEffectGitHubUserData from './UseEffect/UseEffectGitHubUserData'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Rounting/Home'
import Main from './Rounting/Main'
import { About } from './Rounting/About'
import Products from './Rounting/Products'
import SingleProduct from './Rounting/SingleProduct'
import SingleProduct2 from './Rounting/SingleProduct2'
import AllProducts from './ShopingCart/AllProducts'
import Cart from './ShopingCart/Cart'
import ControlInputForm from './Forms/ControlInputForm'
import PropDrillingDemo from './PropDrilling/PropDrillingDemo'
import UseContextDEmo from './PropDrilling/UseContextDEmo'
import ReducerCounter from './Reducer/ReducerCounter'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallback from './ErrorFallback'
import { Hero } from './Hero'
import MultiInputForm from './Forms/MultiInputForm'
import ProductList from './ProductList'
import ParentDemo from './WithoutMemo/ParentDemo'
import Parent from './UseMemo/Parent'
function App() {
  const name="Vedant";
  var isLogin=false;

  var [cart,setCart]=useState([]);
    return (
    <>
<Parent></Parent>
    {/* <ErrorBoundary FallbackComponent={ErrorFallback}>
      <ProductList></ProductList> 
    </ErrorBoundary> */}
{/* <ProductList></ProductList> */}
{/* <ParentDemo></ParentDemo> */}
{/* <ErrorBoundary FallbackComponent={ErrorFallback}>
  <ProductList />
</ErrorBoundary> */}
    {/* <ProductList></ProductList> */}
    {/* <ReducerCounter></ReducerCounter> */}
    {/* <ControlInputForm/> */}
    {/* <MultiInputForm></MultiInputForm> */}
    {/* <PropDrillingDemo></PropDrillingDemo> */}
    {/* <UseContextDEmo></UseContextDEmo> */}
    <BrowserRouter>
    <Routes>
      {/* <Route path="/home" element={<h2>This is Home Component</h2>} />
      <Route path="/about" element={<h2>This is About Component</h2>} /> */}
      {/* <Route path="/"  element={<Main/>} >
            <Route path="/home" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/products" element={<Products/>} />
            <Route path="/products/:productid" element={<SingleProduct2 />} />
            <Route path="/allproducts" element={<AllProducts  cart={cart} setCart={setCart}/>} />
            <Route path="/cart" element={<Cart cart={cart} setCart={setCart}/>} />
      </Route> */}
    </Routes>
    </BrowserRouter>


    {/* <Greeting/>
    <Greeting2/>
    <Greeting3/> */}
    {/* <Greeting3/> */}
      {/* <h1 style={{color:"green",backgroundColor:"gray"}}>Hello React</h1>
      <h2>Welcome,{name}</h2>
      <p className='myclass'>This is my react code</p>
      <FruitList/> */}
      {/* <UserList/> */}

      {/* <Card/> 
      <Card/>
      <Card/> */}
      {/* or <Card></Card> */}
      {/* <Test/> */}
      {/* <Greet name="Yash" />
      <Greet name="Prasad" />
      <Greet name="Rashmi" /> */}
      {/* <GreetUser name="Yash" age="21" /> */}
      {/* {isLogin?<Dashboard/>:<Login/>} */}
      {/* <UseState01/> */}
      {/* <UseStateDemo02/>
       */}
       {/* <CounterDemo/> */}
       {/* <UseEffectDemo1/> */}
      {/* <UseEffectGitHubUserData/> */}
    </>
    )
}

//normal function
function Greeting()
{
  return (<><h3>Good Evening User</h3></>)
}

//Anonymous function component
var Greeting2=function(){

  return (<><h3>Hello from Greeting 2</h3></>)
}

//Arrow function
var Greeting3=()=>{
  return (<><h3>Arrow Function Greeting3</h3></>)
}
export default App
