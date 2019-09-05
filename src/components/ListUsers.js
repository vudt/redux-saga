import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchListUsers } from '../actions';
// import Pagination from './Pagination';
import ReactPaginate from 'react-paginate';
import Pagination from 'react-router-pagination'
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";


class ListUsers extends Component {

    constructor(props) {
        super(props)
        this.state = { userData: null, referrer: null }
        console.log(this.state)
        this.handlePageClick = this.handlePageClick.bind(this)
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
                    <button type="button" className="btn btn-warning"><i className="fas fa-edit"></i></button>&nbsp;&nbsp;
                    <button type="button" className="btn btn-danger"><i className="fas fa-trash"></i></button>
                </td>
            </tr>
        )
    }

    render_table_users(users) {
        const element = users.map((item) => {
            return this.loop_user_item(item)
        });
        return element;
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.users_data) {
            this.setState({ userData: nextProps.users_data })
        }
    }

    handlePageClick(data) {
        const link = `/page/${data.selected + 1}`
        this.setState({referrer: link})
    }

    prepareHref(data) {
        return `/page/${data}`
    }

    getLinkRedirect(){
        if(this.state.referrer) {
            const referrerLink = this.state.referrer
            this.setState({referrer: null})
            return referrerLink;
        }
    }

    render() {
        let element = <tr><td colSpan='5'>No data.</td></tr>
        let paginationElement = null;
        let paging = null;
        console.log(this.props.currentPage);
        console.log(this.state.referrer);
        if(this.state.referrer) {
            return <Redirect to={this.state.referrer} />;
        }
        console.log(this.state.userData);
        if (this.state.userData) {
            element = this.render_table_users(this.state.userData.data)
            paging = <Pagination totalPages={this.state.userData.total_pages} pageNumber={this.state.userData.page} />;
            paginationElement = (
                <ReactPaginate
                    previousLabel={"← Previous"}
                    nextLabel={"Next →"}
                    breakLabel={<span className="gap">...</span>}
                    pageCount={this.state.userData.total_pages}
                    onPageChange={this.handlePageClick}
                    forcePage={this.props.currentPage}
                    containerClassName={"pagination"}
                    previousLinkClassName={"previous_page"}
                    nextLinkClassName={"next_page"}
                    disabledClassName={"disabled"}
                    activeClassName={"active"}
                    hrefBuilder={this.prepareHref}
                />
            );
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
                {paginationElement}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { users_data: state.users }
}

export default connect(mapStateToProps, null)(ListUsers);