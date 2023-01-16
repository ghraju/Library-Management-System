import { useState,useEffect } from "react";
import { useNavigate,useLocation } from "react-router-dom";
import '../styles/bookList.css'
const BookList = () => {
    let [books,setBooks]=useState([])
    let location=useLocation()
    let navigate=useNavigate();
    let handleDelete=(id,title)=>{
        fetch(`http://localhost:2000/books/${id}`,{
            method:'DELETE'
        });
    }
    let read=(id)=>{
       if(location.pathname=='/admin/book-list'){
        navigate(`/admin/book-list/${id}`)
       }
       else{
        navigate(`/user/book-list/${id}`)
       }
    }
     useEffect(()=>{
        let fetchData=async()=>{
            let response=await fetch('http://localhost:2000/books')
            let data=await response.json()
            setBooks(data);
        }
        fetchData()
    },[])
    return ( 
        <div className="bookList">
            <h1>Book List:{books.length}</h1>
            <div className="books_section">
                {
                    books.map(data=>(
                        <div className="book_card">
                            <h1>Title:{data.title}</h1>
                            <h6>Page Count:{data.pageCount}</h6>
                            <h6>Authors:{data.authors.toString()}</h6>
                            <img  id="plot" src={data.thumbnailUrl} alt="" />
                            <div className="button">
                            {location.pathname =='/admin/book-list'&& <button onClick={()=>handleDelete(data.id,data.title)}>Delete</button>}
                            <button onClick={()=>read(data.id)}>Read More</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
     );
}
 
export default BookList;