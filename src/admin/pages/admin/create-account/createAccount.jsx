import React, { Component } from 'react'
import Header from '../../../comp/header/header.jsx'
import Form from '../../../comp/Form/form.jsx'
// import Table from './table'
export default class CreateAccount extends Component {
    render() {
        return (
            <div className="main">
                <Header title="Tạo tài khoản" searchbarPH="" />
                <Form type="admin" />
            </div>
        )
    }
}
