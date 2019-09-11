import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Route, Link, NavLink, Redirect } from "react-router-dom";

class Pagination extends Component {

    constructor(props) {
        super(props)
        this.state = {
            totalPages: this.props.totalPages,
            page: this.props.pageNumber
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps) {
            this.setState({
                totalPages: nextProps.totalPages,
                page: nextProps.pageNumber
            })
        }
    }

    render() {
        console.log(this.state)
        if (this.state.totalPages > 1) {
            return (
                <nav id="nav-pagination">
                    <ul className="pagination justify-content-center">
                        <li id="first-page" className="page-item"><NavLink to="/page/1" className={this.state.page == 1 ? 'active' : ''} activeClassName="active">First</NavLink></li>
                        <li className="page-item"><NavLink to="/page/1" className={this.state.page == 1 ? 'active' : ''} activeClassName="active">1</NavLink></li>
                        <li className="page-item"><NavLink to="/page/2" activeClassName="active">2</NavLink></li>
                        <li id="last-page" className="page-item"><NavLink to="/page/2" activeClassName="active">Last</NavLink></li>
                    </ul>
                </nav>
            );
        }
    }
}

export default Pagination;
