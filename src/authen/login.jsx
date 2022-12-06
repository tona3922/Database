import React, { useState, useEffect } from "react";
import { json, Link, useNavigate } from "react-router-dom";
import { Info_input } from "./register_info";
import logo from "../img/home/logo.png";
import login_icon from "../img/login-icon.png";
import back_icon from "../img/back.png";
import ok_icon from "../img/button/ok.png";
import axios from "axios";
import "./login.css";

export const Login = () => {

  const [user, setUser] = useState({
    username: "",
    password: "",
    role:"",
    id:"",
  })

  const [account, setAccount] = useState([]);
  const [flag, setFlag] = useState(false);

  const handleChange = (e) => {
    setUser( state => ({
      ...state,
      [e.target.name]: e.target.value
    }))
  }


  //localStorage.removeItem('USER');

  const compareAccount = () => {
    account.forEach(item => {
      if(item.acc_name === user.username && item.passwords === user.password){
        setFlag(true)
        setUser(state => ({
          ...state,
          role: item.roles,
          id: item.acc_id
        }))
      }
    })
  }
  setTimeout(compareAccount,1000);

  const handleClick = ()=>{
     if(flag === false) alert("Your account is not exist");
  }

  const handleLogin = ()=>{
     window.localStorage.setItem('USER', JSON.stringify(user));
  }

  useEffect(()=>{
    const fetchedBook = async ()=>{
      try{
        const res = await axios.get("http://localhost:8800/login")
        setAccount(res.data)
      }catch(err){
        console.log(err)
      }
    }
    fetchedBook();
  },[])

    console.log(account);
    console.log(flag);
    console.log(user);

  return (
    <div>
      <div className="login-page">
        <div className="login-container">
          <header className="login-header">
            <img className="login-logo" src={logo} alt="" />
            <h1>ĐĂNG NHẬP</h1>
          </header>
          <div className="login-content">
            <label className="login-label" htmlFor="username">
              Tên đăng nhập       </label>
            <input
              name="username"
              className="login-input"
              type="text"
              placeholder="Tên đăng nhập"
              onChange={handleChange}
            />
            <label className="login-label" htmlFor="password">
              Mật khẩu
            </label>
            <input
              name="password"
              className="login-input"
              type="password"
              placeholder="Mật khẩu"
              onChange={handleChange}
            />
            <div className="button-container">
              <Link to="/">
                <button className="btn back-btn" >
                  <img src={back_icon} alt="" />
                  Quay lại
                </button>
              </Link>
             {flag ? 
             ( <Link to="/" state = {user.role}>
             <button className="btn login-btn" onClick={handleLogin}>
                 <img src={login_icon} alt="" />
                 Đăng nhập
             </button>
             </Link>)
             : (<button className="btn login-btn" onClick={handleClick}>
             <img src={login_icon} alt="" />
             Đăng nhập
         </button>)
             }
              
            </div>
            <div className="login-text">
              <p>
                Quên mật khẩu?{" "}
                <button  className="update-pw-btn">
                  Cập nhật mật khẩu
                </button>
              </p>
              <p>
                Chưa có tài khoản? <Link to="/signup">Đăng ký</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
