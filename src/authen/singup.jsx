import React ,{useState} from "react";
import { Link } from "react-router-dom";
import logo from "../img/home/logo.png";
import signup_icon from "../img/signup-icon.png";
import back_icon from "../img/back.png";
import axios from 'axios';
import "./signup.css";

export const Signup = (props) => {
    const [info, setInfo] = useState({
      username: "",
      password: "",
      confirm_password: "",
      fullname: "",
      sex: "",
      id: "",
      phone: "",
      email: "",
      address: "",
      bdate: "",
      role: "",
    });
   // console.log(info);

    const handleSubmit = () => {
     // axios.post('http://localhost:3000/signup',info)
      alert('Successfully signup');
      //localStorage.setItem('INFO', JSON.stringnify(info));
    };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <header className="signup-header">
          <img className="signup-logo" src={logo} alt="" />
          <h1>ĐĂNG KÝ</h1>
        </header>
        <div className="signup-content">
          <label className="signup-label" htmlFor="username">
            Tên đăng nhập
          </label>
          <input
            name="username"
            className="signup-input"
            type="text"
            placeholder="Tên đăng nhập"
            onChange={(e) =>
              setInfo((state) => {
                return {
                  ...state,
                  username: e.target.value,
                };
              })
            }
          />
          <label className="signup-label" htmlFor="password">
            Mật khẩu
          </label>
          <input
            name="password"
            className="signup-input"
            type="password"
            placeholder="Mật khẩu"
            onChange={(e) =>
              setInfo((state) => {
                return {
                  ...state,
                  password: e.target.value,
                };
              })
            }
          />
          <label className="signup-label" htmlFor="password">
            Xác nhận mật khẩu
          </label>
          <input
            name="password"
            className="signup-input"
            type="password"
            placeholder="Xác nhận mật khẩu"
            onChange={(e) =>
              setInfo((state) => {
                return {
                  ...state,
                  confirm_password: e.target.value,
                };
              })
            }
          />
          <div className="button-container">
            <Link to="/">
              <button className="btn back-btn">
                <img src={back_icon} alt="" />
                Quay lại
              </button>
            </Link>
            <Link to="/signup/info_reg" state={info}>
              <button className="btn signup-btn" onClick={handleSubmit}>
                <img src={signup_icon} alt="" />
                Đăng ký
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
