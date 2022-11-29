import React ,{useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../img/home/logo.png";
import signup_icon from "../img/signup-icon.png";
import back_icon from "../img/back.png";
import axios from 'axios';
import "./addbook.css";

export const Addbook = (props) => {
    const [book, setBook] = useState({
      book_name: "",
      book_id: "",
      edition: "",
      quanity: "",
      bAuthor_id: "",
      bCat_id: "",
      price: ""
    });
const handleChange = (e) =>{
  setBook((state) => ({
    ...state, 
    [e.target.name]: e.target.value
  }))
}

const navigate = useNavigate();

const handleClick = async (e) => {
  e.preventDefault();
  try{
    await axios.post("http://localhost:8800/books",book)
    navigate("/")
    //console.log(res);
  }catch(err){
    console.log(err);
    alert("You can not insert the book")
  }
}

console.log(book);

  return (
    <div className="signup-page">
      <div className="signup-container">
        <header className="signup-header">
          <img className="signup-logo" src={logo} alt="" />
          <h1>ADD NEW BOOK</h1>
        </header>
        <div className="signup-content">
          <label className="signup-label">
            Tên sách
          </label>
          <input
            name="book_name"
            className="signup-input"
            type="text"
            placeholder="book-name"
            onChange={handleChange}
          />
          <label className="signup-label">
            Mã sách
          </label>
          <input
            name="book_id"
            className="signup-input"
            type="text"
            placeholder="book-id"
            onChange={handleChange}
          />
          <label className="signup-label">
            Xuất bản
          </label>
          <input
            name="edition"
            className="signup-input"
            type="text"
            onChange={handleChange}
          />
           <label className="signup-label">
            Số lượng
          </label>
          <input
            name="quanity"
            className="signup-input"
            type="text"
            onChange={handleChange}
          />
           <label className="signup-label">
            Author ID
          </label>
          <input
            name="bAuthor_id"
            className="signup-input"
            type="text"
            onChange={handleChange}
          />
           <label className="signup-label">
            Category ID
          </label>
          <input
            name="bCat_id"
            className="signup-input"
            type="text"
            onChange={handleChange}
          />
           <label className="signup-label">
            Price
          </label>
          <input
            name="price"
            className="signup-input"
            type="text"
            onChange={handleChange}
          />
          <div className="button-container">
            <Link to="/">
              <button className="btn back-btn">
                <img src={back_icon} alt="" />
                Cancel
              </button>
            </Link>
              <button className="btn signup-btn" onClick={handleClick}>
                <img src={signup_icon} alt="" />
                Add
              </button>

          </div>
        </div>
      </div>
    </div>
  );
};
