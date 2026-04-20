import { bookinfo } from "../bookinfo";
import { useState } from "react";
function PropDrillingDemo()
{
var [books,setBooks]=useState(bookinfo);

const removeBook=(id)=>{
    var balancebook=books.filter((book)=>{
            return book.id!==id;//id=101,100!==101,101!==101,102!==101,103!==101
})
setBooks(balancebook);
}
return (
    <>
    <List books={books} removeBook={removeBook}></List>
    </>
)
}
export default PropDrillingDemo;

const List=({books,removeBook})=>{
    return(<div className="cardContainer">
    {books.map((book)=>{
        return (
        // <div className="card">
        //     <h3>{book.id}</h3> 
        //     <h3>{book.title}</h3>
        //     <img src={book.imgpath} width="150px" alt="not found"></img>
        //     <h4>{book.author}</h4>
        //     <h5>{book.genore}</h5>
        // </div>
        <SingleBook book={book} removeBook={removeBook}></SingleBook>
        )
    })}
    </div>)
}

const SingleBook=({book,removeBook})=>{
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