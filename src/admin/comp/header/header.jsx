import React, { Component } from 'react'
import SearchBar from './searchbar'

export default class Header extends Component {
    render() {
        return (
            <div className="top--header">
                <h1>{this.props.title}</h1>
                {this.props.searchbarPH !== "" && <SearchBar searchbarPH={this.props.searchbarPH} />}
            </div>

        )
    }
}

