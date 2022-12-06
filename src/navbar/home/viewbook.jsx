import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { FaShoppingBag, FaBook, FaPlusCircle } from "react-icons/fa";
import {AiFillCloseCircle} from "react-icons/ai"
import { BsBookFill } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { VscFilterFilled } from "react-icons/vsc";
import { Link } from "react-router-dom";
import mypic1 from "../../img/book1.jpg";
import "./viewbook.css";

export const Viewbook = (props) => {
  const [book, setBook] = useState([])
  const [filter, setFilter]= useState('');

  const user = JSON.parse(window.localStorage.getItem('USER'));
  console.log(user);
  
  
  const handleChange = (e) =>{
    setFilter(e.target.value);
  }
  
    useEffect(()=>{
      const fetchedBook = async (value)=>{
        try{
          const res = user.role === 'Provider' ? await axios.get("http://localhost:8800/provide/"+ value)
          : await axios.get("http://localhost:8800/books/"+ value)
          setBook(res.data);
        }catch(err){
          console.log(err)
        }
      }
      user.role === 'Provider' ? fetchedBook(user.username) : fetchedBook(filter);
    },[filter, user]) 
  



    console.log(book);

  const handleDelete = async (id) => {
    try{
      await axios.delete("http://localhost:8800/books/" + id);
      window.location.reload();
    }catch(err){
      console.log(err)
    }
  }

  return(
    <div>
      <div className="viewbooktitle" >
        <p className="view-title">View book <BsBookFill /></p>
      </div>
      <div className="filter-icon"></div>
      <select name="filter" className="filter" onChange={handleChange}> 
          <option value=""></option>
          <option value="price">Price</option>
          <option value="Au_name">Author</option>
          <option value="book_name">Book name</option>
      </select>
      <div className="container">
        {book.map(book => (
          <div className="card" key={book.book_id}>
          {user.role === 'Customer' || user === null ?
           (<></>)
           :(
            <button className="editcard">
            <Link
              to={`/update/${book.book_id}`} 
              style={{ color: "inherit", textDecoration: "none" }}
              state={book}
            >
            <FiEdit />
            </Link>
            </button>
           )
          }
          {user.role === 'Customer' || user.role === null? (<></>)
          : (<div className="closecard" role="button" onClick={()=>handleDelete(book.book_id)}> <AiFillCloseCircle /> </div>)}
          
          <div className="uppercard">
            <div className="bookimg">
              <img src={mypic1} alt="capricons's believer" />
            </div>
            <div className="bookinfo">
              <em style={{color: "red"}}>{book.book_name}</em>
              <span><b>Author</b> {book.Au_name}</span>
              <span> <b>Price</b> {book.price} VND</span>
              <p><b>Available:</b> {book.quanity}</p>
            </div>
          </div>
          <div className="downcard">
            <button className="shopping-bag">
              Add to cart <FaShoppingBag />
            </button>
            <button className="review">
              review <FaBook />
            </button>
          </div>
        </div>
        ))}
      </div>
      {user.role === 'Customer' || user.role === null
      ? (<></>)
     : (<Link to="/addbook" >
    <button className="shopping-bag addbook" type='button'>Add new book &nbsp;<FaPlusCircle /></button>
    </Link>)}
    </div>
  );
};
