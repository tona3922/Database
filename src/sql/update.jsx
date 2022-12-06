import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaShoppingBag, FaBook, FaPlusCircle } from "react-icons/fa";
import {AiFillCloseCircle} from "react-icons/ai"
import { BsBookFill } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { VscFilterFilled } from "react-icons/vsc";
import mypic1 from "../img/book1.jpg";
import "./update.css";


export function Info_input(props) {
  return (
    <div className="info-input">
      <label className="register-label" htmlFor="">
        {props.name}
      </label>
      <input
        className="register-input"
        type={props.type}
        placeholder={props.placeholder}
        name={props.labelName}
        onChange={props.onChange}
      />
    </div>
  );
}


export const Updatebook = (props) => {
  const [book, setBook] = useState({
      book_name: "",
      edition: "",
      quanity: "",
      bAuthor_id: "",
      bCat_id: "",
      price: ""
  });
  const [error,setError] = useState(false)

  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state;
  console.log(state);
 
  const bookId = location.pathname.split("/")[2];

  console.log(book);
  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put('http://localhost:8800/books/'+ bookId , book);
      navigate("/");
    } catch (err) {
      alert(err);
      console.log(err);
      setError(true);
    }
  };

  return (
    <div className="card" key={book.book_id}>
    <div className="uppercard">
      <div className="bookimg bookupdate">
        <img src={mypic1} alt="capricons's believer" />
      </div>
      <div className="bookinfo">
      <Info_input
            name="Book Title"
            labelName="book_name"
            placeholder={state.book_name}
            type="text"
            onChange={handleChange}
          />
      <Info_input
            name="Edition"
            labelName="edition"
            placeholder={state.edition}
            type="number"
            onChange={handleChange}
          />
      <Info_input
            name="Quantity"
            labelName="quanity"
            placeholder={state.quantity}
            type="number"
            onChange={handleChange}
          />
        <Info_input
            name="Author ID"
            labelName="bAuthor_id"
            placeholder={state.bAuthor_id}
            type="text"
            onChange={handleChange}
          />
           <Info_input
            name="Cat ID"
            labelName="bCat_id"
            placeholder={state.bCat_id}
            type="text"
            onChange={handleChange}
          />
           <Info_input
            name="Price"
            labelName="price"
            placeholder={state.price}
            type="text"
            onChange={handleChange}
          />
      </div>
    </div>
    <div className="downcard">
      <button className="shopping-bag" onClick={handleClick}>
        Update <FaShoppingBag />
      </button>
       <Link to="/" style={{ color: "inherit", textDecoration: "none" }} >
      <button className="review">
       Cancel<FaBook />
      </button>
       </Link>
    </div>
  </div>
  );
}