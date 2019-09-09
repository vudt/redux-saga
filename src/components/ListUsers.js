import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchListUsers, actToggleModal, fetchUser } from '../actions';
import Pagination from './Pagination';
import ReactPaginate from 'react-paginate';
import { BrowserRouter as Router, Route, Link, NavLink, Redirect } from "react-router-dom";

class ListUsers extends Component {

    constructor(props) {
        super(props)
        this.state = { userData: null, showModal: this.props.showModal }
        console.log(this.state)
        console.log(this.props)
        // this.handlePageClick = this.handlePageClick.bind(this)
        this.openModal = this.openModal.bind(this);
    }

    loop_user_item(item) {
        return (
            <tr key={item.id}>
                <td>{item.id}</td>
                <td><img src={item.avatar} /></td>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
                <td>
                    <NavLink to={`/user/${item.id}`} className="btn btn-default"><i className="fas fa-eye"></i></NavLink>&nbsp;&nbsp;
                    <button type="button" className="btn btn-primary" onClick={ () => {this.openModal(item.id)} } ><i className="fas fa-edit"></i></button>&nbsp;&nbsp;
                    <button type="button" className="btn btn-danger"><i className="fas fa-trash"></i></button>
                </td>
            </tr>
        )
    }

    openModal(id) {
        this.props.actToggleModal(!this.state.showModal);
        this.props.fetchUser(id);
    }

    render_table_users(users) {
        const element = users.map((item) => {
            return this.loop_user_item(item)
        });
        return element;
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.currentPage !== nextProps.currentPage) {
            this.props.fetchListUsers(nextProps.currentPage);
        }
        if (nextProps.users_data.data) {
            this.setState({ userData: nextProps.users_data })
        }
    }

    componentDidMount() {
        this.props.fetchListUsers(this.props.currentPage); 
    }

    render() {
        let element = <tr><td colSpan='5'>No data.</td></tr>
        let paging = null;

        console.log(this.state.userData);
        if (this.state.userData) {
            element = this.render_table_users(this.state.userData.data)
            paging = <Pagination totalPages={this.state.userData.total_pages} pageNumber={this.props.currentPage} />;
        }
        return (
            <div className="wrap_tbl_users table-responsive">
                <table id="list_users" className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Avatar</th>
                            <th>Fist Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>{element}</tbody>
                </table>
                {paging}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { users_data: state.users, showModal: state.showModal, user: state.user.data }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchListUsers: fetchListUsers,
        fetchUser: fetchUser,
        actToggleModal: actToggleModal
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ListUsers);