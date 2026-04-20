import { createContext, useContext } from "react";
import { useState } from "react";
import { bookinfo } from "../bookinfo";

var BookContainer=createContext();
function UseContextDEmo()
{

    var [books,setBooks]=useState(bookinfo);
    const removeBook=(id)=>{
        var balancebook=books.filter((book)=>{
                return book.id!==id;//id=101,100!==101,101!==101,102!==101,103!==101
    })
    setBooks(balancebook);
    }
    return (<div>
        <BookContainer.Provider value={{books,removeBook}}>
        <List></List>
        </BookContainer.Provider>
    
    </div>)
}
export default UseContextDEmo;

const List=()=>{
    var {books}=useContext(BookContainer)
    return(<div className="cardContainer">
    {books.map((book)=>{
        return (
            <SingleBook book={book} ></SingleBook>
        )
    })}
    </div>)
}
const SingleBook=({book})=>{
    var {removeBook}=useContext(BookContainer);
    return (
    <div className="card">
        <h3>{book.id}</h3> 
            <h3>{book.title}</h3>
            <img src={book.imgpath} width="150px" alt="not found"></img>
            <h4>{book.author}</h4>
            <h5>{book.genore}</h5>
            <button onClick={()=>{removeBook(book.id)}}>Remove Book</button>
    </div>)
}