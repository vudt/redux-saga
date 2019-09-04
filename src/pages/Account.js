import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actLogout } from '../actions';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";

class Account extends Component {

    constructor(props) {
        super(props)
        const authentication = this.props.authentication;
        if (authentication) {
            this.state = { isLogged: authentication.isLogged, email: authentication.email }
        }
        this.logout = this.logout.bind(this)
    }

    logout() {
        this.props.actLogout();
    }

    componentWillReceiveProps(nextProps){
        console.log('234');
        console.log(nextProps);
        this.setState({isLogged: nextProps.authentication.isLogged, email: nextProps.authentication.email})
    }

    render() {
        console.log(3);
        console.log(this.state);
        if (!this.state.isLogged) {
            return <Redirect to='/login' />
        }
        return (
            <div>
                <h2>Welcome, { this.state.email }</h2>
                <p><button className="btn btn-default" onClick={this.logout}>Logout</button></p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { authentication: state.authentication }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        actLogout: actLogout
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps) (Account);
