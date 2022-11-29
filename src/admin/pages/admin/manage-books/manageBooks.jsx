import React, { Component } from 'react'
import Header from '../../../comp/header/header.jsx'
// import Table from './table'
export default class ManageBooks extends Component {
    render() {
        return (
            <div className="main">
                <Header title="Quản lý sách trong tiệm" searchbarPH="Tìm kiếm sách" />
                {/* <div className="content"><Table /></div> */}
            </div>
        )
    }
}
