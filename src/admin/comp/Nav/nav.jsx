import React from 'react';
import {
    NavLink
} from "react-router-dom";

export default function Navbar() {
    return (
        <nav>
            <div className='logo'>
                {/* <img src={process.env.PUBLIC_URL + '/admin/logo_kamikaze.png'} alt="##" /> */}
            </div>
            <div className="routes">
                <NavLink className='nav--route' to="/admin/accounts">
                    {/* <img src={process.env.PUBLIC_URL + '/admin/nav-bar/acc.png'} alt="" /> */}
                    <span to="/admin/accounts">Danh sách tài khoản</span>
                </NavLink>
                <NavLink className='nav--route' to="/admin/create-account">
                    {/* <img src={process.env.PUBLIC_URL + '/admin/nav-bar/add-acc.png'} alt="" /> */}
                    <span>Tạo tài khoản</span>
                </NavLink>
                <NavLink className='nav--route' to="/admin/shop">
                    {/* <img src={process.env.PUBLIC_URL + '/admin/nav-bar/book-manage.png'} alt="" /> */}
                    <span to="/admin/shop">Quản lý sách</span>
                </NavLink>
            </div>

        </nav>
    )
}

