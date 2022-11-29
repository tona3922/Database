import React, { Component } from 'react'
import './form.scss';
export default class Form extends Component {
    render() {
        return (
            <form className="card-form">
                <div className="form-tag"><h1>Thông tin đăng nhập</h1></div>
                <div className="form--input">
                    <input type="text" className="input-field" required />
                    <label className="input-label">Username</label>
                </div>
                <div className="multi-inputs">
                    <div className="form--input" style={{ "width": "50%" }}>
                        <input type="password" className="input-field" required />
                        <label className="input-label">Mật khẩu</label>
                    </div>
                    <div className="form--input" style={{ "width": "50%" }}>
                        <input type="password" className="input-field" required />
                        <label className="input-label" >Xác nhận mật khẩu</label>
                    </div>
                </div>
                {/* </form >

                <form className="card-form"> */}
                <div className="form-tag"><h1>Thông tin cá nhân</h1></div>
                <div className="form--input" >
                    <input type="text" className="input-field" required />
                    <label className="input-label">Họ và tên</label>
                </div>
                <div className="multi-inputs" >
                    <div className="form--input" style={{ "width": "25%" }}>
                        <select id="gender" className="input-field">
                            <option value="M">Nam</option>
                            <option value="F">Nữ</option>
                        </select>
                        <label className="input-label">Giới tính</label>
                    </div>
                    <div className="form--input" style={{ "width": "25%" }}>
                        <input type="date" className="input-field" value="1990-01-01" required />
                        <label className="input-label">Ngày sinh</label>
                    </div>
                    <div className="form--input" style={{ "width": "50%" }}>
                        <input type="form--input" className="input-field" required />
                        <label className="input-label">Số điện thoại</label>
                    </div>
                </div>
                <div className="form--input">
                    <input type="form--input" className="input-field" required />
                    <label className="input-label">Địa chỉ</label>
                </div>
                {this.props.type === "admin" &&
                    <div className="form--input">
                        <select id="role" className="input-field">
                            <option value="KH">Khách hàng</option>
                            <option value="MN">Quản lý</option>
                            <option value="AD">Admin</option>
                        </select>
                        <label className="input-label">Vai trò của tài khoản</label>
                    </div>}
                <div className="action">
                    <button className="action-button">Đăng kí tài khoản</button>
                </div>
            </form >
        )
    }
}
