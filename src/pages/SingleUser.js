import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import { fetchUser } from './../actions';

class SingleUser extends Component {

    constructor(props) {
        super(props)
        this.state = { user_id: this.props.match.params.id, user: null, isFetching: false }
        console.log(this.state)
    }

    componentDidMount() {
        console.log('componentDidMount');
        setTimeout(() => {this.props.fetchUser(this.state.user_id)}, 300)
        // this.props.fetchUser(this.state.user_id);
    }

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps');
        this.setState({ user: null });
        if (nextProps.user) {
            this.setState({ user: nextProps.user, isFetching: nextProps.isFetching });
        }
    }

    render() {
        console.log(this.state)
        console.log(this.props)
        let elm = <p>Loading...</p>
        if (this.state.isFetching === true) {
            if (this.state.user) {
                elm = (
    
                    <div>
                        <h4>{this.state.user.first_name} {this.state.user.last_name}</h4>
                        <h5>{this.state.user.email}</h5>
                        <img src={this.state.user.avatar} />
                    </div>
                );
            } else {
                elm = <p>Data not found.</p>
            }
        }
        return (
            <div> {elm} </div>
        )
    }
}

function mapStateToProps(state) {
    return { user: state.user.data, isFetching: state.user.isFetching }
}

function mapDispatchToProps(dispatch, ownProps) {
    return bindActionCreators({
        fetchUser: fetchUser
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleUser);