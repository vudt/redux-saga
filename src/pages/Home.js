import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchListUsers } from '../actions';
import ListUsers from '../components/ListUsers';
import Pagination from '../components/Pagination';

class Home extends Component {

    constructor(props) {
        super(props);
        this.props.fetchListUsers(1);
        this.state = { referrer: null }
    }

    render() {
        console.log(this.props.match)
        let currentPage = 0
        if (this.props.match) {
            currentPage = this.props.match.params.page -1;
        }
        console.log(currentPage);
        return (
            <div className="main-content">
                <h2>Home</h2>
                <ListUsers currentPage={currentPage} referrer={this.state.referrer} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { users: state.users }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchListUsers: fetchListUsers
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);