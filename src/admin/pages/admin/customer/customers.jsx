import React, { Component } from 'react'
import Header from '../../../comp/header/header.jsx'
import Table from './table'
import avatars from '../../../../../public/admin/table/avataaars.png'
export default class Customers extends Component {
    state = {
        header: ["", "Họ và tên", "Giới tính", "Email", "Địa chỉ", "SĐT", "Số CMND", "Loại tài khoản", "Tùy chọn"],
        listCustomer: [
            [avatars, "Hoàng Kim Cương", "Nam", "somebody@gmail.com", "XX đường R, KP Z, phường A, quận B, Thành phố C", "0352 xxx xxxx", "0792 xxxx xxxx", "Admin", "Tùy chọn"],
            [avatars, "Võ Thái Toàn", "Nam", "somebuddy@gmail.com", "XY đường Y, KP Z, phường A, quận B, Thành phố C", "0972 xxx xxxx", "0792 xxxx xxxx", "Khách hàng", "Tùy chọn"],
            [avatars, "Trần Chí Công", "Nam", "somebuddy1@gmail.com", "XT đường F, KP Z, phường A, quận B, Thành phố C", "0785 xxx xxxx", "0792 xxxx xxxx", "Quản lý", "Tùy chọn"],
            [avatars, "Cao Trần Anh Khoa", "Nam", "somebuddy2@gmail.com", "XV đường F, KP W, phường A, quận B, Thành phố C", "0785 xxx xxxx", "0792 xxxx xxxx", "Khách hàng thân thiết", "Tùy chọn"],
            [avatars, "Lê Hoàng Ngọc Phát", "Nam", "somebuddy3@gmail.com", "XR đường E, KP Q, phường A, quận B, Thành phố C", "0785 xxx xxxx", "0792 xxxx xxxx", "Khách hàng", "Tùy chọn"],
            [avatars, "Overflow Test", "Nam", "somebuddy3@gmail.com", "asdhfjkh kwejkfhwkjefqhk dsj ashdfk jhsa djfhakjs fhkjdsa hfkasdh kdsah fkjdsha fkjasf hkdsah fkdsah fjkdasf hakjsd hska hfdksafh jkasd dhjk fhadskjf hdsak fa fkjdasm fkjdshkja mkjsd hfakjs ask f sadjfk aks mfhdkaj aks", "0785 xxx xxxx", "0792 xxxx xxxx", "Khách hàng", "Tùy chọn"],
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
