import React, { Component } from 'react'
import Header from '../../../comp/header/header.jsx'
import Table from './table'
export default class Customers extends Component {
    state = {
        header: ["", "Họ và tên", "Giới tính", "Email", "Địa chỉ", "SĐT", "Số CMND", "Loại tài khoản", "Tùy chọn"],
        listCustomer: [
            [process.env.PUBLIC_URL + "/admin/table/avataaars.png", "Hoàng Kim Cương", "Nam", "somebody@gmail.com", "XX đường R, KP Z, phường A, quận B, Thành phố C", "0352 xxx xxxx", "0792 xxxx xxxx", "Admin", "Tùy chọn"],
            [process.env.PUBLIC_URL + "/admin/table/avataaars.png", "Võ Thái Toàn", "Nam", "somebuddy@gmail.com", "XY đường Y, KP Z, phường A, quận B, Thành phố C", "0972 xxx xxxx", "0792 xxxx xxxx", "Khách hàng", "Tùy chọn"],
            [process.env.PUBLIC_URL + "/admin/table/avataaars.png", "Trần Chí Công", "Nam", "somebuddy1@gmail.com", "XT đường F, KP Z, phường A, quận B, Thành phố C", "0785 xxx xxxx", "0792 xxxx xxxx", "Quản lý", "Tùy chọn"],
            [process.env.PUBLIC_URL + "/admin/table/avataaars.png", "Cao Trần Anh Khoa", "Nam", "somebuddy2@gmail.com", "XV đường F, KP W, phường A, quận B, Thành phố C", "0785 xxx xxxx", "0792 xxxx xxxx", "Khách hàng thân thiết", "Tùy chọn"],
            [process.env.PUBLIC_URL + "/admin/table/avataaars.png", "Lê Hoàng Ngọc Phát", "Nam", "somebuddy3@gmail.com", "XR đường E, KP Q, phường A, quận B, Thành phố C", "0785 xxx xxxx", "0792 xxxx xxxx", "Khách hàng", "Tùy chọn"],
            [process.env.PUBLIC_URL + "/admin/table/avataaars.png", "Overflow Test", "Nam", "somebuddy3@gmail.com", "asdhfjkh kwejkfhwkjefqhk dsj ashdfk jhsa djfhakjs fhkjdsa hfkasdh kdsah fkjdsha fkjasf hkdsah fkdsah fjkdasf hakjsd hska hfdksafh jkasd dhjk fhadskjf hdsak fa fkjdasm fkjdshkja mkjsd hfakjs ask f sadjfk aks mfhdkaj aks", "0785 xxx xxxx", "0792 xxxx xxxx", "Khách hàng", "Tùy chọn"],
        ]
    }
    render() {
        return (
            <div className="main">
                <Header title="Danh sách tài khoản" searchbarPH="Tìm kiếm người dùng" />
                <div className="content"><Table header={this.state.header} info={this.state.listCustomer} /></div>
            </div>
        )
    }
}
