import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchListUsers } from '../actions';
import ListUsers from '../components/ListUsers';
import Pagination from '../components/Pagination';

class Home extends Component {

    constructor(props) {
        super(props);
        console.log('constructor');
    }

    componentWillMount(){
        
        console.log('componentWillMount');
    }

    componentDidMount() {
        console.log('componentDidMount');
        // this.props.fetchListUsers(1);
        // console.log(this.props.match.params)   
    }

    componentDidUpdate() {
        
    }

    componentWillReceiveProps(nextProps) {
        // console.log(this.props.match)
        // if (nextProps.users_data) {
        //     this.setState({ userData: nextProps.users_data })
        // }
    }

    render() {
        let currentPage = 1
        if (this.props.match) {
            currentPage = this.props.match.params.page;
        }
        return (
            <div className="main-content">
                <h2>Home</h2>
                <ListUsers currentPage={currentPage} />
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    // console.log(ownProps)
    return { users: state.users }
}


function mapDispatchToProps(dispatch, ownProps) {
    return bindActionCreators({
        fetchListUsers: fetchListUsers
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);