import React, { Component } from 'react'

class AdminOption extends Component {
    render() {
        return (
            <div className="ad--option">
                <button type="button" className="del"><img src={process.env.PUBLIC_URL + "/admin/table/admin-option/del.png"} alt=""></img>Vô hiệu hóa TK</button>
                <button type="button" className="per"><img src={process.env.PUBLIC_URL + "/admin/table/admin-option/per.png"} alt=""></img>Phân quyền</button>
            </div>
        );
    }
};

class TableRow extends Component {
    render() {
        let key = 0;
        console.log(this.props.info);
        return (
            <div className={this.props.type}>
                {
                    this.props.info.map(infoPiece => {
                        return (infoPiece === "Tùy chọn" && this.props.type === "row") ? <div className="divTableCell" key={key++}><AdminOption /></div> :
                            <div className="divTableCell" key={key++}>
                                {infoPiece.includes('/') ? <img src={infoPiece} /> : infoPiece}
                            </div>
                    })
                }
                
            </div>
        )
    }
};

export default class Table extends Component {
    render() {
        return (
            <div className="divTable">
                <div className="divTableBody">
                    <TableRow type="header" info={this.props.header} />
                    {
                        this.props.info.map(customer => {
                            return <TableRow type="row" info={customer} />
                        })
                    }
                </div>
            </div>
        )
    }
};
