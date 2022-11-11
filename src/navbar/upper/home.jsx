import React from "react";
import logo from "../../img/logo.png";
import facebook from "../../img/facebook.png";
import instagram from "../../img/instagram.png";
import twitter from "../../img/twitter.png";
import mail from "../../img/mail.png";
import phone from "../../img/phone.png";
import location from "../../img/location.png";
import momo from "../../img/momo.png";
import bank from "../../img/bank.png";
import slider1 from "../../img/slider1.png";
import { Viewbook } from "./viewbook";
import { Uppernav } from "../uppernav";

import "./home.css";

export const Home = () => {
  return (
    <div className="homepage">
      <Uppernav />
      <div className="introHome">
        <img src={logo} alt="#" />
        <a href="#topbook">
          <button class="normbutton">Top Books</button>
        </a>
        <a href="#viewbook">
          <button class="normbutton">View Books</button>
        </a>
        <button class="category">
          <select>
            <option value="#">Category</option>
            <option value="A">Science</option>
            <option value="B">Novel</option>
            <option value="C">Fiction</option>
            <option value="D">Adventure</option>
            <option value="E">Comic</option>
          </select>
        </button>
        <div class="searchButton">
          <input type="text" placeholder="Search here" />
          <button class="search">Search</button>
        </div>
      </div>
      <div className="slider">
        <div className="slides">
          <input type="radio" id="radio1" name="radio-btn" />
          <input type="radio" id="radio2" name="radio-btn" />
          <input type="radio" id="radio3" name="radio-btn" />
          <input type="radio" id="radio4" name="radio-btn" />
          <input type="radio" id="radio5" name="radio-btn" />
          <div className="slide first">
            <img src={slider1} alt="" />
          </div>
          <div className="slide">
            <img src={bank} alt="" />
          </div>
          <div className="slide">
            <img src={slider1} alt="" />
          </div>
          <div className="slide">
            <img src={slider1} alt="" />
          </div>
          <div className="slide">
            <img src={slider1} alt="" />
          </div>
        </div>
        <div className="navigation-manual">
          <label htmlFor="radio1" className="manual-btn"></label>
          <label htmlFor="radio2" className="manual-btn"></label>
          <label htmlFor="radio3" className="manual-btn"></label>
          <label htmlFor="radio4" className="manual-btn"></label>
          <label htmlFor="radio5" className="manual-btn"></label>
        </div>
      </div>
      <hr></hr>
      <div id="topbook" className="topbook">
        afaf
      </div>
      <hr></hr>
      <div id="viewbook" className="viewbook">
        <Viewbook />
      </div>
      <hr></hr>
      <div className="footer">
        <div className="footerLeft">
          <img class="imgfootleft" src={logo} alt="#" />
          <div className="notice">
            <p>MyBookstore nhận đặt hàng trực tuyến và giao hàng tận nơi.</p>
            <p>KHÔNG hỗ trợ đặt mua và nhận hàng trực tiếp tại văn phòng.</p>
          </div>
          <div className="media">
            <img class="imgmedia" src={facebook} alt="#" />
            <img class="imgmedia" src={instagram} alt="#" />
            <img class="imgmedia" src={twitter} alt="#" />
          </div>
        </div>
        <div className="footerRight">
          <p className="footrightTitle">Contact</p>
          <div className="contact">
            <div className="contactinfo">
              <img class="info" src={location} alt="" />
              &nbsp; abcxyz
            </div>
            <div className="contactinfo">
              <img class="info" src={phone} alt="" />
              &nbsp; abcxyz
            </div>
            <div className="contactinfo">
              <img class="info" src={mail} alt="" />
              &nbsp; abcxyz
            </div>
          </div>
          <p className="footrightTitle">Online payment</p>
          <div className="onlinepay">
            <img class="onlinepayicon" src={momo} alt="" />
            <img class="onlinepayicon" src={bank} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
