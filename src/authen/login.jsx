import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Info_input } from "./register_info";
import logo from "../img/home/logo.png";
import login_icon from "../img/login-icon.png";
import back_icon from "../img/back.png";
import ok_icon from "../img/button/ok.png";
import axios from "axios";
import "./login.css";

export const Login = () => {


  const displayModal = () => {
    const modal = document.querySelector(".modal-forgetpw");
    modal.classList.add("open");
  };
  const removeModal = () => {
    const modal = document.querySelector(".modal-forgetpw.open");
    modal.classList.remove("open");
  };
  // const handleSubmit = () => {
  //   axois.post("http://localhost:3000/login");
  // };
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
              Tên đăng nhập
            </label>
            <input
              name="username"
              className="login-input"
              type="text"
              placeholder="Tên đăng nhập"
            />
            <label className="login-label" htmlFor="password">
              Mật khẩu
            </label>
            <input
              name="password"
              className="login-input"
              type="password"
              placeholder="Mật khẩu"
            />
            <div className="button-container">
              <Link to="/">
                <button className="btn back-btn">
                  <img src={back_icon} alt="" />
                  Quay lại
                </button>
              </Link>
              <button className="btn login-btn">
                <img src={login_icon} alt="" />
                Đăng nhập
              </button>
            </div>
            <div className="login-text">
              <p>
                Quên mật khẩu?{" "}
                <button onClick={displayModal} className="update-pw-btn">
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
      <div className="modal-forgetpw">
        <div className="modal-container">
          <header className="modal-header">
            <h1>CẬP NHẬT MẬT KHẨU</h1>
          </header>
          <div className="modal-content">
            <Info_input labelName="Tên đăng nhập" type="text" />
            <Info_input labelName="Mật khẩu mới" type="password" />
            <Info_input labelName="Xác nhận mật khẩu mới" type="password" />
          </div>
          <div className="button-container">
            <button onClick={removeModal} className="btn-reg back-btn">
              <img src={back_icon} alt="" />
              Quay lại
            </button>
            <button className="btn-reg confirm-btn">
              <img src={ok_icon} alt="" />
              Xác nhận
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
